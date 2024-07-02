"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BackgroundSwitcher: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      const colors = ["#000000", "#1a1a1a", "#333333"];
      let currentIndex = 0;

      const changeBackgroundColor = () => {
        const nextIndex = (currentIndex + 1) % colors.length;
        canvasElement.style.backgroundColor = colors[nextIndex];
        currentIndex = nextIndex;
      };

      const interval = setInterval(changeBackgroundColor, 10000);

      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (event.deltaY > 0) {
          camera.position.z += 1;
        } else {
          camera.position.z -= 1;
        }
      };

      canvasElement.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        clearInterval(interval);
        canvasElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default BackgroundSwitcher;
