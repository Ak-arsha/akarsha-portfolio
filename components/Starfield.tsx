"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function StarLayer({
  count,
  radius,
  size,
  color,
  speed,
}: {
  count: number;
  radius: number;
  size: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute in a sphere shell for depth
      const r = radius * (0.6 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const x = (state.mouse.x * viewport.width) / 40;
    const y = (state.mouse.y * viewport.height) / 40;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.02;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.02;
  });

  return <group ref={group}>{children}</group>;
}

export default function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ParallaxRig>
          <StarLayer count={900} radius={9} size={0.028} color="#f4f2ff" speed={0.012} />
          <StarLayer count={350} radius={6} size={0.05} color="#8ff2d9" speed={0.02} />
          <StarLayer count={180} radius={4.2} size={0.06} color="#c6b4ff" speed={-0.016} />
        </ParallaxRig>
      </Canvas>
    </div>
  );
}
