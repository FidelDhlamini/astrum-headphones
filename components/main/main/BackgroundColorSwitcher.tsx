"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const BackgroundSwitcher: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = ["black", "#1a1a1a", "#262626"];
    let currentIndex = 0;

    const changeBackgroundColor = () => {
      const nextIndex = (currentIndex + 1) % colors.length;
      if (containerRef.current) {
        containerRef.current.style.backgroundColor = colors[nextIndex];
      }
      currentIndex = nextIndex;
    };

    const interval = setInterval(changeBackgroundColor, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvasElement = containerRef.current;
    if (canvasElement) {
      const handleWheel = (event: WheelEvent) => {
        // Handle wheel event
        event.preventDefault();
      };
      canvasElement.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        canvasElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0">
      <Canvas className="w-full h-full">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/* Add your 3D objects here */}
      </Canvas>
    </div>
  );
};

export default BackgroundSwitcher;
