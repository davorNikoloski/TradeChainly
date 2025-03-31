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
        ease: [0.16, 0.77, 0.47, 0.97] // Custom smooth easing curve
      }}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }} // Triggers when 30% of element is visible
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#A194C2] to-[#35335E]"></div>

      {/* Text content - opacity only */}
      <motion.div 
        className="relative flex flex-col text-center md:text-left gap-[24px] z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ 
          duration: 0.85,
          delay: 0.10, // Slight delay after card appears
          ease: "easeOut"
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-[22px] font-normal text-white leading-[1.4]">
          {data.title}
        </h3>
        <p className="text-[#C1C3DE] text-[16px] leading-[1.4] font-[400]">
          {data.description}
        </p>
      </motion.div>

      {/* Image - slides from right to left */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.12, // Slight delay after text appears
          ease: [0.16, 0.77, 0.47, 0.97] // Matches card easing
        }}
        viewport={{ once: true }}
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