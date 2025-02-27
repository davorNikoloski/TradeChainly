"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

export default function SubCardsComponent({ data }) {
  return (
    <motion.div 
      className="relative w-full p-6 rounded-2xl shadow-lg flex flex-col md:flex-col items-center gap-[24px] h-[476.4px] max-w-[361.325px] overflow-hidden"
      initial={{ opacity: 0.8, y: 30 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }} // Subtle hover effect
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A194C2] to-[#35335E]"></div>

      {/* Title & Description Animation */}
      <motion.div 
        className="relative flex flex-col text-center md:text-left gap-[24px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-[24px] font-normal text-white leading-[1.4]">
          {data.title}
        </h3>
        <p className="text-gray-400 text-[16px] leading-[1.4] font-[400]">
          {data.description}
        </p>
      </motion.div>

      {/* Motion Image */}
      <motion.div
        initial={{ left: "8rem", opacity: 0.8 }}
        whileInView={{ left: "2rem", opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full h-full z-[1]"
      >
        <Image 
          src={data.image} 
          alt={data.title} 
          width={1200} 
          height={1200} 
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}
