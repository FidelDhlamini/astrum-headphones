"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LogoProps {
  src: string;
  alt: string;
  label: string;
}

const logos: LogoProps[] = [
  { src: "/bluetoothlogo.png", alt: "Logo 1", label: "Bluetooth" },
  { src: "/recharge.png", alt: "Logo 2", label: "Rachargable Battery" },
  { src: "/headphone-logo.webp", alt: "Logo 3", label: "Wear Detection" },
];

const AnimatedLogo: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      logoContainerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logoContainerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={logoContainerRef} className="container mx-auto py-12">
      <div className="flex justify-center items-center space-x-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center"
          >
            <img src={logo.src} alt={logo.alt} className="h-20 w-20 mb-2" />
            <span className="text-white">{logo.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
