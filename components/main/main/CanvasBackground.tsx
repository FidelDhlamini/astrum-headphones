"use client"

import React, { useEffect, useRef } from "react";

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

       
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 10 + 5,
          0,
          Math.PI * 2
        );
        ctx.fill();

        requestAnimationFrame(render);
      };

      render();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>;
};

export default CanvasBackground;
