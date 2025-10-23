import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function RotatingLightbulb({ rotate }) {
  const meshRef = useRef();
  const texture = useTexture("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1024&q=80"); // high-res lightbulb

  // Animate rotation when 'rotate' is true
  useFrame(() => {
    if (rotate && meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function LightbulbRotation() {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center bg-neutral-900 text-white">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <RotatingLightbulb rotate={rotate} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <button
        onClick={() => setRotate(!rotate)}
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-200"
      >
        {rotate ? "Stop Rotation" : "Rotate Lightbulb"}
      </button>
    </div>
  );
}
