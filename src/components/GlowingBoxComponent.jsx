"use client";

import { motion, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import "../styles/glowingBoxComponent.css";

export default function GlowingBoxComponent({ width = 'full', maxWidth = '1200px', image, delayedScrollProgress }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Define scroll range based on screen size
  const scrollRange = useMemo(() => isMobile ? [0, 0.03] : [0.0186, 0.0652], [isMobile]);

  // Define the scale animation based on scroll progress
  const scale = useTransform(delayedScrollProgress, scrollRange, [0.93, 1]);

  // Apply spring physics to the scale
  const springScale = useSpring(scale, {
    stiffness: 150, // Increased stiffness for a snappier feel
    damping: 20,    // Increased damping to reduce overshoot
    mass: 0.5,
  });

  // Define the position shift (from 3rem to 0rem)
  const positionOffset = useTransform(delayedScrollProgress, scrollRange, [48, 0]);

  // Apply spring physics to the position offsets
  const springPosition = useSpring(positionOffset, {
    stiffness: 150, // Increased stiffness for a snappier feel
    damping: 20,    // Increased damping to reduce overshoot
    mass: 0.5,
  });

  return (
    <motion.div
      className="gb-container bg-[#010012] w-full md:h-[690px] h-fit mx-auto rounded-[16px] p-[0px] relative flex items-center justify-center overflow-visible"
      style={{ 
        width, 
        maxWidth,
        scale: springScale, // Apply spring-based scale
      }}
    >
      {image && (
        <motion.div
          className="relative z-[50] overflow-hidden w-full"
          style={{
            borderRadius: "16px",
            top: springPosition,  // Apply spring-based `top`
            left: springPosition, // Apply spring-based `left`
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`w-[130%] h-[2000%] ${image.className || ""}`}
            style={{
              objectFit: "contain",
              borderRadius: "16px",
            }}
            priority // Ensure the image is loaded with high priority
          />
        </motion.div>
      )}
    </motion.div>
  );
}