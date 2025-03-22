"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../../styles/circle.css";

const logos = [
  "/images/Exchanges_Logos/binance.png",
  "/images/Exchanges_Logos/bybit.png",
  "/images/Exchanges_Logos/coinbase.png",
  "/images/Exchanges_Logos/cryptocom.png",
  "plus-icon", // Placeholder for the plus icon at index 4
  "/images/Exchanges_Logos/kraken.png",
  "/images/Exchanges_Logos/kucoin.png",
  "/images/Exchanges_Logos/OKX.png",
];

const centerImage = "/images/App Logo/HQTransparent_Mark.png"; // Center image

export default function CircleWithLogos() {
  const [circleRadius, setCircleRadius] = useState(200);
  const [offset, setOffset] = useState(32); // Default offset value
  const [offset2, setOffset2] = useState(32); // Default offset value
  const [glowSize, setGlowSize] = useState(10); // Default glow size in rem
  const [glowOpacity, setGlowOpacity] = useState(0.5); // Default glow opacity

  // Update radius, offset, and glow based on screen size
  useEffect(() => {
    const updateValues = () => {
      if (window.innerWidth < 640) {
        setCircleRadius(160); // Smaller radius for mobile
        setOffset(130); // Larger offset for mobile
        setOffset2(160); // Larger offset for mobile
        setGlowSize(6); // Smaller glow size for mobile
        setGlowOpacity(0.3); // Lower opacity for mobile
      } else if (window.innerWidth < 1024) {
        setCircleRadius(220); // Medium radius for tablets
        setOffset(90); // Medium offset for tablets
        setOffset2(100); // Larger offset for mobile
        setGlowSize(8); // Medium glow size for tablets
        setGlowOpacity(0.4); // Medium opacity for tablets
      } else {
        setCircleRadius(270); // Default for larger screens
        setOffset(32); // Default offset for larger screens
        setOffset2(32); // Larger offset for mobile
        setGlowSize(10); // Default glow size for larger screens
        setGlowOpacity(0.5); // Default opacity for larger screens
      }
    };

    updateValues();
    window.addEventListener("resize", updateValues);
    return () => window.removeEventListener("resize", updateValues);
  }, []);

  return (
    <motion.div 
      className="relative flex items-center justify-center w-full max-w-[600px] md:h-[600px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Dashed Circle */}
      <motion.div
        className="absolute w-[90%] md:h-[90%] h-[21rem] border-2 border-dashed border-gray-300 dark:border-white rounded-full gradient-circle"
      />
      <div className="absolute w-[10rem] h-[10rem] bg-[#774af1] rounded-full opacity-50 blur-xl"></div>

      {/* Pulsating Circles */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          initial={{ scale: 1, opacity: glowOpacity / i }} // Use dynamic opacity
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: i * 0.2,
            ease: "easeOut",
          }}
          style={{
            backgroundColor: "#774af1", // Updated to use the new color
            width: `${glowSize}rem`, 
            height: `${glowSize}rem`
          }}
        />
      ))}

      {/* Center Image */}
      <div className="absolute w-[115px] h-[115px] p-[24px] bg-black bg-opacity-[50%] shadow-xl rounded-[24px] flex items-center justify-center">
        <Image
          src={centerImage}
          alt="Center Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Exchange Logos Positioned in a Circle */}
      {logos.map((logo, index) => {
        const angle = (index * 360) / logos.length - 90; // Evenly spaced
        const x = 300 + circleRadius * Math.cos((angle * Math.PI) / 180) - offset;
        const y = 300 + circleRadius * Math.sin((angle * Math.PI) / 180) - offset2;

        return logo === "plus-icon" ? (
          /* Plus Icon */
          <motion.div
            key="plus-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-[#774af1] shadow-xl"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              background: "radial-gradient(circle at center, #3D3D91 0%, #010013 100%)",
            }}
          >
            <div className="w-6 h-6 relative">
              <div className="absolute w-full h-[3px] bg-[#774af1] top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-[3px] bg-[#774af1] left-1/2 transform -translate-x-1/2"></div>
            </div>
          </motion.div>
        ) : (
          /* Exchange Logos */
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute w-[75px] h-[75px] image-cont shadow-lg rounded-xl flex items-center justify-center md:p-[14px] p-[8px]"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            <Image
              src={logo}
              alt={`Exchange Logo ${index + 1}`}
              width={48}
              height={48}
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
