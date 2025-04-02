"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SubCardsComponent({ data }) {
  return (
    <motion.div 
      className="relative w-full p-6 rounded-2xl shadow-lg flex flex-col md:flex-col items-center gap-[24px] h-[476.4px] max-w-[361.325px] overflow-hidden"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.75,
        ease: [0.16, 0.77, 0.47, 0.97]
      }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }} // Changed margin to trigger earlier
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#A194C2] to-[#35335E]"></div>

      {/* Text content - opacity only */}
      <motion.div 
        className="relative flex flex-col text-center md:text-left gap-[24px] z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ 
          duration: 0.85,
          delay: 0.10,
          ease: "easeOut"
        }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }} // Consistent early trigger
      >
        <h3 className="text-[22px] font-normal text-white leading-[1.4]">
          {data.title}
        </h3>
        <p className="text-[#C1C3DE] text-[16px] leading-[1.4] font-[400]">
          {data.description}
        </p>
      </motion.div>

      {/* Image - slides from right to left (slower animation) */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1, // Increased from 0.75 to make it slower
          delay: 0.15, // Slightly increased delay
          ease: [0.16, 0.77, 0.47, 0.97]
        }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }} // Consistent early trigger
        className="relative w-full h-full z-[1]"
      >
        <Image 
          src={data.image} 
          alt={data.title} 
          width={1800} 
          height={1800} 
          className="w-fit h-fit object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}