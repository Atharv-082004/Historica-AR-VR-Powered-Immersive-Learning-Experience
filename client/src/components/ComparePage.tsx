import { Suspense, useState } from "react";
import { useLocation } from "wouter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { monuments } from "../data/monuments";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Model = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={[0, -1, 0]} scale={1.5} />;
};

const ScenePreview = ({ url }: { url: string }) => (
  <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
    <Environment preset="sunset" />
    <Suspense fallback={null}>
      <Model url={url} />
    </Suspense>
    <OrbitControls enablePan enableZoom enableRotate minDistance={2} maxDistance={12} />
  </Canvas>
);

const MonumentPicker = ({
  value,
  onChange,
  exclude,
  label,
}: {
  value: string;
  onChange: (id: string) => void;
  exclude?: string;
  label: string;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-amber-800">{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-white border border-amber-200 rounded-md px-3 py-2 text-sm text-orange-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      {monuments
        .filter(m => m.id !== exclude)
        .map(m => (
          <option key={m.id} value={m.id}>
            {m.name} — {m.city}
          </option>
        ))}
    </select>
  </div>
);

const Side = ({ id }: { id: string }) => {
  const m = monuments.find(x => x.id === id);
  if (!m) return null;
  return (
    <Card className="border-amber-200 shadow-lg bg-white/90 backdrop-blur-md overflow-hidden flex flex-col h-full">
      <div className="h-[55%] bg-gradient-to-br from-amber-100/40 to-orange-100/40">
        <ScenePreview url={m.primaryModel} />
      </div>
      <CardContent className="p-4 overflow-y-auto flex-1">
        <h3 className="text-xl font-bold text-amber-800">{m.name}</h3>
        <p className="text-sm text-orange-700 mb-2">{m.city}, {m.state}</p>
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div className="bg-amber-50 border border-amber-100 rounded px-2 py-1.5">
            <div className="text-amber-700 font-semibold">Built</div>
            <div className="text-orange-800">{m.yearBuilt}</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded px-2 py-1.5">
            <div className="text-amber-700 font-semibold">Dynasty</div>
            <div className="text-orange-800">{m.dynasty}</div>
          </div>
        </div>
        <p className="text-sm text-orange-900 leading-relaxed line-clamp-6">{m.description}</p>
      </CardContent>
    </Card>
  );
};

const ComparePage = () => {
  const [, setLocation] = useLocation();
  const [a, setA] = useState(monuments[0].id);
  const [b, setB] = useState(monuments[1].id);

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">
            Compare Monuments
          </h1>
          <p className="text-sm text-orange-700">Pick any two monuments to view side-by-side.</p>
        </div>
        <div className="flex gap-3 items-end">
          <MonumentPicker label="Left" value={a} onChange={setA} exclude={b} />
          <MonumentPicker label="Right" value={b} onChange={setB} exclude={a} />
          <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        <Side id={a} />
        <Side id={b} />
      </div>
    </div>
  );
};

export default ComparePage;
