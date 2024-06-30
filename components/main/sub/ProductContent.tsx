"use client"

import React from "react";
import {motion} from 'framer-motion' ;
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ProductContent =() =>{
    return(
        <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[4px] border border-[#FFFFFF] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#FFFFFF] mr-[10px]  h-10 w-10' />
                <h1 className='Welcome-text text-[13px] justify-center'> Audio Store </h1>
                </motion.div>
                
                <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
                >
                    Providing
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 to white"></span>
                </motion.div>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px] "
                >
                    Immerse yourself in premium sound and comfort with our sleek, wireless headphones—crafted for exceptional clarity and all-day wear.

                </motion.p>
                <motion.a  
                variants={slideInFromLeft(1)}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                   Learn More!
                </motion.a>
            </div>
            <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center"
            >

            </motion.div>
        </motion.div>
    )
}

export default ProductContent