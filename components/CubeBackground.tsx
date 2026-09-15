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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene & Camera setup
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

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8ff2d9, 3, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xc6b4ff, 3, 100);
    pointLight2.position.set(-20, -20, 10);
    scene.add(pointLight2);

    // -------------------------------------------------------------
    // GALAXY STARFIELD (3D Points System)
    // -------------------------------------------------------------
    const starCount = window.innerWidth < 768 ? 900 : 2000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xf4f2ff), // starlight
      new THREE.Color(0x8ff2d9), // teal
      new THREE.Color(0xc6b4ff), // violet
      new THREE.Color(0xffa9c8), // rose
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 120;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const c = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // -------------------------------------------------------------
    // FLOATING 3D CUBES WITH WIREFRAME EDGES
    // -------------------------------------------------------------
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
        transparent: true,
        opacity: 0.09 + Math.random() * 0.12,
      });

      const mesh = new THREE.Mesh(geometry, material);

      const edgesGeo = new THREE.EdgesGeometry(geometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.4 + Math.random() * 0.4,
      });
      const edges = new THREE.LineSegments(edgesGeo, lineMaterial);

      const baseX = (Math.random() - 0.5) * 55;
      const baseY = (Math.random() - 0.5) * 45;
      const baseZ = (Math.random() - 0.5) * 30;

      mesh.position.set(baseX, baseY, baseZ);
      edges.position.set(baseX, baseY, baseZ);

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

      // Galaxy starfield slow cosmic rotation
      starField.rotation.y = elapsedTime * 0.015 + mouseX * 0.03;
      starField.rotation.x = elapsedTime * 0.008 - mouseY * 0.03;

      if (!prefersReducedMotion) {
        cubes.forEach((cube) => {
          cube.mesh.rotation.x += cube.rotSpeedX;
          cube.mesh.rotation.y += cube.rotSpeedY;
          cube.mesh.rotation.z += cube.rotSpeedZ;
          cube.edges.rotation.copy(cube.mesh.rotation);

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

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
}
