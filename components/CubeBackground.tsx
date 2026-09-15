"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type CubeData = {
  mesh: THREE.Mesh;
  edges: THREE.LineSegments;
  baseX: number;
  baseY: number;
  baseZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  floatSpeed: number;
  floatOffset: number;
};

export default function CubeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8ff2d9, 3, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc6b4ff, 3, 100);
    pointLight2.position.set(-20, -20, 10);
    scene.add(pointLight2);

    // Create floating 3D cubes
    const cubes: CubeData[] = [];
    const cubeColors = [0x8ff2d9, 0xc6b4ff, 0xffa9c8, 0x64748b];
    const numCubes = window.innerWidth < 768 ? 12 : 22;

    const group = new THREE.Group();
    scene.add(group);

    for (let i = 0; i < numCubes; i++) {
      const size = 1.2 + Math.random() * 2.8;
      const geometry = new THREE.BoxGeometry(size, size, size);

      const color = cubeColors[i % cubeColors.length];
      const material = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: false,
        transparent: true,
        opacity: 0.08 + Math.random() * 0.12,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Add wireframe edge highlight for crisp 3D look
      const edgesGeo = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.35 + Math.random() * 0.4,
      });
      const edges = new THREE.LineSegments(edgesGeo, lineMaterial);

      const baseX = (Math.random() - 0.5) * 55;
      const baseY = (Math.random() - 0.5) * 45;
      const baseZ = (Math.random() - 0.5) * 30;

      mesh.position.set(baseX, baseY, baseZ);
      edges.position.set(baseX, baseY, baseZ);

      // Random initial rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      edges.rotation.copy(mesh.rotation);

      group.add(mesh);
      group.add(edges);

      cubes.push({
        mesh,
        edges,
        baseX,
        baseY,
        baseZ,
        rotSpeedX: (Math.random() - 0.5) * 0.012,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        floatSpeed: 0.5 + Math.random() * 1.2,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Parallax mouse effect
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: PointerEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 4;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 4;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Window resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      group.rotation.y = mouseX * 0.08;
      group.rotation.x = -mouseY * 0.08;

      if (!prefersReducedMotion) {
        cubes.forEach((cube) => {
          cube.mesh.rotation.x += cube.rotSpeedX;
          cube.mesh.rotation.y += cube.rotSpeedY;
          cube.mesh.rotation.z += cube.rotSpeedZ;
          cube.edges.rotation.copy(cube.mesh.rotation);

          // Subtle floating motion
          const floatY =
            cube.baseY +
            Math.sin(elapsedTime * cube.floatSpeed + cube.floatOffset) * 1.5;
          cube.mesh.position.y = floatY;
          cube.edges.position.y = floatY;
        });
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}
