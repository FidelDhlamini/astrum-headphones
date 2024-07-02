"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FacebookIcon from './FacebookIcon';     
import TwitterIcon from './TwitterIcon';       
import InstagramIcon from './InstagramIcon';   

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 py-4 shadow-lg fixed w-full bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img
              src="/astrum-logo.png"
              alt="Company Logo"
              className="h-20 w-20 mr-2"
            />
          </motion.div>
          <div>
            <p className="text-sm"></p>
            <p className="text-xs text-gray-400"></p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="flex items-center">
              <FacebookIcon className="h-6 w-6 mr-1" />
              <span>Facebook</span>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="flex items-center">
              <TwitterIcon className="h-6 w-6 mr-1" />
              <span>Twitter</span>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="flex items-center">
              <InstagramIcon className="h-6 w-6 mr-1" />
              <span>Instagram</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400">
          123 Main Street, Cityville, State, Country
          64 Lechwe St, Corporate Park South,
          Old Pretoria Road, Midrand 1685,
           South Africa.
        </p>
        <p className="text-xs text-gray-400">info@astrum.co.za</p>
        <p className="text-xs text-gray-400">+27 11 314 0400</p>
      </div>
    </footer>
  );
};

export default Footer;
