import { useEffect, useMemo, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { monuments } from "../data/monuments";
import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { Button } from "./ui/button";
import { useAudio } from "../lib/stores/useAudio";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useModelLoader } from "../hooks/useModelLoader";
import { toast } from "sonner";
import { OrbitControls } from "@react-three/drei";

const AR_MODEL_OVERRIDES: Record<string, { targetSize?: number; yOffset?: number; zOffset?: number }> = {
  "ajanta-ellora": { targetSize: 3, yOffset: -0.1, zOffset: -1.9 },
};

const ARScene = ({ modelPath, monumentId }: { modelPath: string; monumentId: string }) => {
  const model = useModelLoader(modelPath);
  const [rotation, setRotation] = useState(0);

  const normalizedScene = useMemo(() => {
    if (!model?.scene) return null;

    const override = AR_MODEL_OVERRIDES[monumentId] ?? {};
    const cloned = model.scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);

    if (box.isEmpty()) {
      return cloned;
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const targetMaxDimension = override.targetSize ?? 2;
    const unclampedScale = targetMaxDimension / maxDimension;
    const scaleFactor = Math.min(10, Math.max(0.05, unclampedScale));
    const yOffset = override.yOffset ?? -0.2;
    const zOffset = override.zOffset ?? -2;

    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -center.y * scaleFactor + yOffset,
      -center.z * scaleFactor + zOffset,
    );

    return cloned;
  }, [model, monumentId]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.005);
    }, 16);
    
    return () => clearInterval(interval);
  }, []);

  if (!model || !normalizedScene) return null;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <primitive 
        object={normalizedScene}
        rotation={[0, rotation, 0]} 
      />
    </>
  );
};

const ARView = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>("/monument/:id/ar");
  const { setSelectedMonument, selectedMonument } = useAppContext();
  const audio = useAudio();

  useEffect(() => {
    if (!match) return;
    
    const monument = monuments.find(m => m.id === params.id);
    if (monument) {
      setSelectedMonument(monument);
    } else {
      setLocation("/");
    }
  }, [match, params?.id]);

  const handleBack = () => {
    audio.playHit();
    if (selectedMonument) {
      setLocation(`/monument/${selectedMonument.id}`);
    } else {
      setLocation("/");
    }
  };

  if (!selectedMonument) return null;

  return (
    <div className="w-full h-full relative overflow-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full h-full"
      >
        {/* Virtual environment for the monument */}
        <Canvas
          camera={{ position: [0, 0.3, 3], fov: 60 }}
          gl={{ 
            alpha: true, 
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace 
          }}
        >
          <ARScene modelPath={selectedMonument.primaryModel} monumentId={selectedMonument.id} />
          <OrbitControls enableZoom={false} enablePan={false} target={[0, 0, -1.8]} />
        </Canvas>
        
        {/* Camera feed overlay (simulated) */}
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-blue-50/20 to-blue-100/20"></div>

        <div className="absolute top-4 left-4 z-10">
          <Button variant="secondary" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
            </svg>
            Back
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Button 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-md"
            onClick={() => toast.info("AR mode is simulated in this demo")}
          >
            Start AR
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 p-2 rounded-md z-10 text-center">
          <h3 className="font-semibold">{selectedMonument.name}</h3>
          <p className="text-sm">This is a simulated AR experience of the monument</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ARView;
