"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../../styles/circle.css";

const logos = [
  "/images/Exchanges_Logos/binance.png",
  "/images/Exchanges_Logos/bybitClear.png",
  "/images/Exchanges_Logos/coinbase.png",
  "/images/Exchanges_Logos/cryptocom.png",
  "plus-icon",
  "/images/Exchanges_Logos/kraken.png",
  "/images/Exchanges_Logos/kucoin.png",
  "/images/Exchanges_Logos/OKXClear.png",
];

const centerImage = "/images/App Logo/HQTransparent_Mark.png";

export default function CircleWithLogos() {
  const [dimensions, setDimensions] = useState({
    container: 600,
    circle: 500,
    logo: 75,
    center: 115,
    offset: 32,
    glowSize: 10, // in rem
    glowOpacity: 0.5
  });

  useEffect(() => {
    const updateDimensions = () => {
      let newDimensions;
      if (window.innerWidth < 640) {
        newDimensions = {
          container: 330,
          circle: 300,
          logo: 60,
          center: 90,
          offset: 30,
          glowSize: 6,
          glowOpacity: 0.3
        };
      } else if (window.innerWidth < 1024) {
        newDimensions = {
          container: 450,
          circle: 400,
          logo: 70,
          center: 100,
          offset: 28,
          glowSize: 8,
          glowOpacity: 0.4
        };
      } else {
        newDimensions = {
          container: 600,
          circle: 500,
          logo: 75,
          center: 115,
          offset: 32,
          glowSize: 10,
          glowOpacity: 0.5
        };
      }
  
      setDimensions((prev) => 
        JSON.stringify(prev) !== JSON.stringify(newDimensions) ? newDimensions : prev
      );
    };
  
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  const getLogoPosition = (index) => {
    const angle = (index * (360 / logos.length)) - 90;
    const radian = angle * (Math.PI / 180);
    const radius = dimensions.circle / 2;
    return {
      x: radius * Math.cos(radian) - dimensions.offset,
      y: radius * Math.sin(radian) - dimensions.offset
    };
  };

  
  return (
    <div className="flex justify-center items-center w-full py-12">
      <motion.div 
        className="relative mx-auto"
        style={{
          width: `${dimensions.container}px`,
          height: `${dimensions.container}px`
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Static Glow - Now Perfectly Centered */}
        <div 
          className="absolute w-[10rem] h-[10rem] bg-[#774af1] rounded-full opacity-50 blur-xl"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Pulsating Glow Effect */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl"
            style={{
              backgroundColor: "#774af1",
              width: `${dimensions.glowSize}rem`,
              height: `${dimensions.glowSize}rem`,
              left: `calc(50% - ${dimensions.glowSize/2}rem)`,
              top: `calc(50% - ${dimensions.glowSize/2}rem)`
            }}
            initial={{ scale: 1, opacity: dimensions.glowOpacity / i }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Dotted Circle */}
        <div 
          className="absolute border-2 border-dashed border-gray-300 dark:border-white rounded-full gradient-circle"
          style={{
            width: `${dimensions.circle}px`,
            height: `${dimensions.circle}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Center Logo */}
        <div 
          className="absolute bg-black bg-opacity-50 shadow-xl rounded-[24px] flex items-center justify-center"
          style={{
            width: `${dimensions.center}px`,
            height: `${dimensions.center}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '24px'
          }}
        >
          <Image
            src={centerImage}
            alt="Center Logo"
            width={60}
            height={60}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Logos Around Circle */}
        {logos.map((logo, index) => {
        const { x, y } = getLogoPosition(index);


          return (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                width: `${dimensions.logo}px`,
                height: `${dimensions.logo}px`,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {logo === "plus-icon" ? (
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#774af1] flex items-center justify-center "
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  background: "radial-gradient(circle at center, #3D3D91 0%, #010013 100%)",
                }}
                >
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-full h-[3px] bg-[#774af1] top-1/2 -translate-y-1/2" />
                    <div className="absolute h-full w-[3px] bg-[#774af1] left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full image-cont shadow-lg rounded-xl p-3">
                  <Image
                    src={logo}
                    alt={`Exchange Logo ${index + 1}`}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}