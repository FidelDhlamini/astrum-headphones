"use client"
// components/BackgroundSwitcher.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';

const BackgroundSwitcher = () => {
  const canvasRef = useRef(null);
  const images = ['/background1.webp', '/background2.webp', '/background3.webp']; // Ensure correct paths

  const textureLoader = new THREE.TextureLoader();
  const textures = useRef<THREE.Texture[]>(images.map(image => textureLoader.load(image)));

  const planeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const addToRefs = (el: THREE.Mesh | null) => {
    if (el && !planeRefs.current.includes(el)) {
      planeRefs.current.push(el);
    }
  };

  useEffect(() => {
    planeRefs.current.forEach((plane, index) => {
      if (plane) {
        gsap.fromTo(plane.material, { opacity: 0 }, { opacity: index === 0 ? 1 : 0, duration: 1 });
      }
    });

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior

      // Determine direction of mouse wheel
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      let currentImage = 0;

      if (delta < 0) { // Scroll up
        currentImage = (textures.current.length + currentImage - 1) % textures.current.length;
      } else if (delta > 0) { // Scroll down
        currentImage = (currentImage + 1) % textures.current.length;
      }

      planeRefs.current.forEach((plane, index) => {
        if (plane) {
          gsap.to(plane.material, { opacity: index === currentImage ? 1 : 0, duration: 1 });
        }
      });
    };

    // Add wheel event listener
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      // Clean up event listener
      if (canvasElement) {
        canvasElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0">
      <Canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <BackgroundPlanes textures={textures.current} planeRefs={planeRefs} addToRefs={addToRefs} />
      </Canvas>
    </div>
  );
};

const BackgroundPlanes = ({ textures, planeRefs, addToRefs }: { textures: THREE.Texture[], planeRefs: React.MutableRefObject<(THREE.Mesh | null)[]>, addToRefs: (el: THREE.Mesh | null) => void }) => {
  useFrame((state) => {
    planeRefs.current.forEach(plane => {
      if (plane) {
        plane.rotation.y = state.clock.elapsedTime;
      }
    });
  });

  return (
    <>
      {textures.map((texture, index) => (
        <mesh key={index} ref={() => addToRefs(null)}>
          <planeGeometry args={[window.innerWidth, window.innerHeight, 1, 1]} />
          <meshBasicMaterial map={texture} transparent />
        </mesh>
      ))}
    </>
  );
};

export default BackgroundSwitcher;
