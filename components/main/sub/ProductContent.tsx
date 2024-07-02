"use client"
// components/ProductContent.tsx
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Carousel from "@/components/main/main/Carousel";
import AnimatedLogo from "./AnimatedLogo";

const ProductContent: React.FC = () => {
  const images = [
    '/headphone1.webp',
    '/headphone2.webp',
    '/headphone3.webp',
  ];

  return (
    <div className="w-full h-auto resize-y pb-40 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center h-auto mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col lg:flex-row gap-8 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center text-4xl md:text-6xl font-bold w-full lg:w-1/2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-white-100 hover:text-white">
              MZ PRO HEADSET QC5.2 ANC APTX AUX BLACK
            </span>
            <motion.p
              variants={slideInFromLeft(0.8)}
              whileHover={{ scale: 1.05 }}
              className="text-lg text-gray-400 my-5 hover:text-white"
            >
              Immerse yourself in premium sound and comfort with our sleek, wireless headphones—crafted for exceptional clarity and all-day wear.Wear Detection: Enjoy automatic play and pause when you put on or take off your headphones.Ambient Mode: Stay mindful of your environment with Ambient Mode, ideal for when you’re on the go.Multi-Point Connection: Easily switch between devices with our Multi-Point Connection feature.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Carousel images={images} />
          </motion.div>
        </div>
        <motion.div className="mt-20 flex flex-col">
        <AnimatedLogo />
      </motion.div>
      </motion.div>
      
     
    </div>
  );
};

export default ProductContent;
