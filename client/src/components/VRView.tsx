import { useEffect, useMemo, useRef, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments, Monument } from "../data/monuments";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useModelLoader } from "../hooks/useModelLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { toast } from "sonner";

const vrToastStyle = {
  background: "rgba(17, 24, 39, 0.96)",
  color: "#f9fafb",
  border: "1px solid rgba(255, 255, 255, 0.14)",
};

const VR_MODEL_OVERRIDES: Record<string, { targetSize?: number; yOffset?: number }> = {
  "taj-mahal": { targetSize: 4.8, yOffset: -1.35 },
  "ajanta-ellora": { targetSize: 5.2, yOffset: -0.8 },
};

const VRInfoBoard = ({
  text,
  position,
  rotation,
}: {
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const boardRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 6;
      ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 44px Inter, Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const lines = text.split("\n");
      lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, canvas.height / 2 + (index - (lines.length - 1) / 2) * 62);
      });
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [text]);

  useFrame(({ clock }) => {
    if (!boardRef.current) return;
    const t = clock.getElapsedTime();
    boardRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.05;
    const targetScale = isHovered ? 1.06 : 1;
    boardRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
  });

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  return (
    <mesh
      ref={boardRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <planeGeometry args={[2.3, 1.2]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.95}
        emissive={isHovered ? "#1d4ed8" : "#000000"}
        emissiveIntensity={isHovered ? 0.18 : 0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const VRScene = ({ monument, isExploring }: { monument: Monument; isExploring: boolean }) => {
  const model = useModelLoader(monument.primaryModel);
  const modelGroupRef = useRef<THREE.Group>(null);

  const normalizedScene = useMemo(() => {
    if (!model?.scene) return null;
    const override = VR_MODEL_OVERRIDES[monument.id] ?? {};

    const cloned = model.scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);

    if (box.isEmpty()) {
      return cloned;
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Fit very different monument models into a consistent visible size.
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const targetMaxDimension = override.targetSize ?? 3.2;
    const unclampedScale = targetMaxDimension / maxDimension;
    const scaleFactor = Math.min(8, Math.max(0.05, unclampedScale));
    const yOffset = override.yOffset ?? -1.2;

    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -box.min.y * scaleFactor + yOffset,
      -center.z * scaleFactor,
    );

    return cloned;
  }, [model, monument.id]);

  useFrame((_state, delta) => {
    if (isExploring && modelGroupRef.current) {
      modelGroupRef.current.rotation.y += delta * 0.22;
    }
  });

  if (!model || !normalizedScene) return null;

  return (
    <>
      <color attach="background" args={["#dce4eb"]} />
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.5} groundColor="#9aa4af" color="#ffffff" />
      <directionalLight 
        position={[6, 10, 7]}
        intensity={1.2}
        castShadow 
      />
      
      <group ref={modelGroupRef}>
        <primitive object={normalizedScene} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.02, 0]} receiveShadow>
        <circleGeometry args={[5.2, 64]} />
        <meshStandardMaterial color="#cfd5db" roughness={0.95} metalness={0.02} />
      </mesh>

      <Environment preset="city" />
    </>
  );
};

const VRView = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id/vr");
  const { setSelectedMonument, selectedMonument } = useAppContext();
  const audio = useAudio();
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    if (!match) return;
    
    const monument = monuments.find(m => m.id === params.id);
    if (monument) {
      setSelectedMonument(monument);
    } else {
      setLocation("/");
    }

    // In a real app, we would check for VR support
    // But since we removed the VR library dependency, we'll skip that
  }, [match, params?.id]);

  const handleBack = () => {
    audio.playHit();
    if (selectedMonument) {
      setLocation(`/monument/${selectedMonument.id}`);
    } else {
      setLocation("/");
    }
  };

  const handleToggleExploration = () => {
    setIsExploring((prev) => {
      const next = !prev;
      toast.info(next ? "Exploration mode enabled" : "Exploration mode disabled", {
        style: vrToastStyle,
      });
      return next;
    });
  };

  if (!selectedMonument) return null;

  return (
    <div className="w-full h-full relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full h-full"
      >
        <Canvas
          shadows
          camera={{ position: [0, 1.8, 4.6], fov: 46 }}
          gl={{ 
            antialias: true,
            // THREE.sRGBEncoding is deprecated in newer THREE.js versions
            outputColorSpace: THREE.SRGBColorSpace 
          }}
        >
          {selectedMonument && (
            <>
              <VRScene monument={selectedMonument} isExploring={isExploring} />
              <OrbitControls
                makeDefault
                target={[0, 0.85, 0]}
                minDistance={isExploring ? 0.9 : 1.35}
                maxDistance={isExploring ? 7.5 : 8.8}
                enablePan={isExploring}
                autoRotate={false}
                enableDamping
                dampingFactor={0.09}
                zoomSpeed={0.7}
                panSpeed={0.75}
                rotateSpeed={0.75}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2.05}
              />
            </>
          )}
        </Canvas>

        <div className="absolute top-4 left-4 z-10">
          <Button variant="secondary" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
            </svg>
            Back
          </Button>
        </div>

        <div className="absolute top-4 right-28 z-10 flex gap-2">
          <Button 
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md shadow-md"
            onClick={handleToggleExploration}
          >
            {isExploring ? "Stop Exploration" : "Start Exploration"}
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 p-3 rounded-md z-10 text-center max-w-md shadow-md">
          <h3 className="font-semibold">{selectedMonument.name} - VR Experience</h3>
          <p className="text-sm">Drag to orbit. Scroll to zoom. Use Start Exploration for free pan mode.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default VRView;
