import { useEffect, useMemo, useRef, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments, Monument } from "../data/monuments";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useModelLoader } from "../hooks/useModelLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { toast } from "sonner";

const vrToastStyle = {
  background: "rgba(17, 24, 39, 0.96)",
  color: "#f9fafb",
  border: "1px solid rgba(255, 255, 255, 0.14)",
};

const VR_MODEL_OVERRIDES: Record<string, { targetSize?: number; lift?: number }> = {
  "taj-mahal": { targetSize: 4.8, lift: 0.02 },
  "ajanta-ellora": { targetSize: 5.2, lift: 0.04 },
};

type VRLayout = {
  target: [number, number, number];
  cameraPosition: [number, number, number];
  minDistance: number;
  maxDistance: number;
  floorY: number;
};

const VRCameraRig = ({ layout }: { layout: VRLayout }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...layout.cameraPosition);
    camera.lookAt(...layout.target);
    camera.updateProjectionMatrix();
  }, [camera, layout]);

  return null;
};

const VRScene = ({
  monument,
  isExploring,
  onLayoutChange,
}: {
  monument: Monument;
  isExploring: boolean;
  onLayoutChange: (layout: VRLayout) => void;
}) => {
  const model = useModelLoader(monument.primaryModel);
  const modelGroupRef = useRef<THREE.Group>(null);

  const sceneLayout = useMemo(() => {
    if (!model?.scene) return null;
    const override = VR_MODEL_OVERRIDES[monument.id] ?? {};

    const cloned = model.scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);

    if (box.isEmpty()) {
      return {
        scene: cloned,
        layout: {
          target: [0, 0.6, 0] as [number, number, number],
          cameraPosition: [1.8, 1.7, 5.2] as [number, number, number],
          minDistance: 1.35,
          maxDistance: 8.8,
          floorY: -1.05,
        },
      };
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const targetMaxDimension = override.targetSize ?? 3.2;
    const unclampedScale = targetMaxDimension / maxDimension;
    const scaleFactor = Math.min(8, Math.max(0.05, unclampedScale));
    const lift = override.lift ?? 0.03;

    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -box.min.y * scaleFactor + lift,
      -center.z * scaleFactor,
    );

    const positionedBox = new THREE.Box3().setFromObject(cloned);
    const positionedSize = new THREE.Vector3();
    positionedBox.getSize(positionedSize);
    const floorY = positionedBox.min.y - 0.04;

    const focusY = THREE.MathUtils.clamp(
      positionedBox.min.y + positionedSize.y * 0.38,
      floorY + 0.75,
      floorY + 2.4,
    );
    const horizontalSpan = Math.max(positionedSize.x, positionedSize.z, 1);
    const cameraDistance = THREE.MathUtils.clamp(horizontalSpan * 1.9, 4.2, 8.5);

    return {
      scene: cloned,
      layout: {
        target: [0, focusY, 0] as [number, number, number],
        cameraPosition: [cameraDistance * 0.42, focusY + 1.05, cameraDistance] as [number, number, number],
        minDistance: THREE.MathUtils.clamp(horizontalSpan * 0.7, 1.35, 2.8),
        maxDistance: THREE.MathUtils.clamp(horizontalSpan * 3.2, 6.5, 12),
        floorY,
      },
    };
  }, [model, monument.id]);

  useEffect(() => {
    if (sceneLayout) {
      onLayoutChange(sceneLayout.layout);
    }
  }, [sceneLayout, onLayoutChange]);

  useFrame((_state, delta) => {
    if (isExploring && modelGroupRef.current) {
      modelGroupRef.current.rotation.y += delta * 0.22;
    }
  });

  if (!model || !sceneLayout) return null;

  return (
    <>
      <color attach="background" args={["#dce4eb"]} />
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.5} groundColor="#9aa4af" color="#ffffff" />
      <directionalLight position={[6, 10, 7]} intensity={1.2} castShadow />

      <group ref={modelGroupRef}>
        <primitive object={sceneLayout.scene} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, sceneLayout.layout.floorY, 0]} receiveShadow>
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
  const [layout, setLayout] = useState<VRLayout>({
    target: [0, 0.85, 0],
    cameraPosition: [1.8, 1.9, 4.9],
    minDistance: 1.35,
    maxDistance: 8.8,
    floorY: -1.05,
  });

  useEffect(() => {
    if (!match) return;

    const monument = monuments.find((m) => m.id === params.id);
    if (monument) {
      setSelectedMonument(monument);
    } else {
      setLocation("/");
    }
  }, [match, params?.id, setLocation, setSelectedMonument]);

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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full">
        <Canvas
          shadows
          camera={{ position: [1.8, 1.9, 4.9], fov: 38 }}
          gl={{
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <VRCameraRig layout={layout} />
          <VRScene monument={selectedMonument} isExploring={isExploring} onLayoutChange={setLayout} />
          <OrbitControls
            makeDefault
            target={layout.target}
            minDistance={isExploring ? Math.max(0.9, layout.minDistance * 0.8) : layout.minDistance}
            maxDistance={isExploring ? Math.max(layout.maxDistance, layout.minDistance + 5) : layout.maxDistance}
            enablePan={isExploring}
            autoRotate={false}
            enableDamping
            dampingFactor={0.09}
            zoomSpeed={0.7}
            panSpeed={0.75}
            rotateSpeed={0.75}
            minPolarAngle={Math.PI / 4.2}
            maxPolarAngle={Math.PI / 2.12}
          />
        </Canvas>

        <div className="absolute top-4 left-4 z-10">
          <Button variant="secondary" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
            </svg>
            Back
          </Button>
        </div>

        <div className="absolute top-4 right-28 z-10 flex gap-2">
          <Button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md shadow-md" onClick={handleToggleExploration}>
            {isExploring ? "Lock Camera" : "Free Explore"}
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 p-3 rounded-md z-10 text-center max-w-md shadow-md">
          <h3 className="font-semibold">{selectedMonument.name} - Interactive 3D View</h3>
          <p className="text-sm">
            Browser-based monument exploration. Drag to orbit, scroll to zoom, and use Free Explore to pan around the scene.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VRView;
