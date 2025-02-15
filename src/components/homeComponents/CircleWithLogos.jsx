"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [radius, setRadius] = useState(20);
  const [growing, setGrowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((prevRadius) => {
        if (prevRadius >= 220) setGrowing(false);
        if (prevRadius <= 90) setGrowing(true);
        return growing ? prevRadius + 1 : prevRadius - 1;
      });
    }, 36); // ~60 FPS for smooth animation

    return () => clearInterval(interval);
  }, [growing]);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[600px] h-[600px] mx-auto">
      {/* Dashed Circle */}
      <div
        className="absolute w-[90%] h-[90%] border-2 border-dashed border-gray-300 dark:border-white rounded-full gradient-circle"
        style={{ "--radius": `${radius}px` }}
      />

      {/* Center Image */}
      <div className="absolute w-[115px] h-[115px] p-[24px] bg-black bg-opacity-[50%] shadow-xl rounded-[24px] flex items-center justify-center">
        <Image
          src={centerImage}
          alt="Binance Center Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Logo Cards Positioned in a Circle */}
      {logos.map((logo, index) => {
        const angle = (index * 360) / logos.length - 90; // Evenly space logos
        const x = 300 + 270 * Math.cos((angle * Math.PI) / 180) - 32;
        const y = 300 + 270 * Math.sin((angle * Math.PI) / 180) - 32;

        return logo === "plus-icon" ? (
          /* Plus Icon at the 5th Spot */
          <motion.div
            key="plus-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="absolute w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-[#a283f9] shadow-xl"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              background: "radial-gradient(circle at center, #3D3D91 0%, #010013 100%)",
            }}
          >
            <div className="w-6 h-6 relative">
              {/* Horizontal Line */}
              <div className="absolute w-full h-[3px] bg-[#a283f9] top-1/2 transform -translate-y-1/2"></div>
              {/* Vertical Line */}
              <div className="absolute h-full w-[3px] bg-[#a283f9] left-1/2 transform -translate-x-1/2"></div>
            </div>
          </motion.div>
        ) : (
          /* Exchange Logos */
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="absolute w-[75px] h-[75px] image-cont shadow-lg rounded-xl flex items-center justify-center p-[14px]"
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
    </div>
  );
}
