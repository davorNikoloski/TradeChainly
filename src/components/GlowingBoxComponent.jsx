"use client";

import { motion, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import "../styles/glowingBoxComponent.css";

export default function GlowingBoxComponent({ width = 'full', maxWidth = '1200px', image, delayedScrollProgress }) {
  // Define the scale animation based on scroll progress
  const scale = useTransform(
    delayedScrollProgress,
    [0.0186, 0.0652], // Scroll range
    [0.93, 1] // Scale from 93% to 100%
  );

  // Apply spring physics to the scale
  const springScale = useSpring(scale, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });

  // Define the position shift (from 3rem to 0rem)
  const positionOffset = useTransform(
    delayedScrollProgress,
    [0.0186, 0.0652], // Scroll range
    [48, 0] // Convert `rem` to `px` (3rem ≈ 48px)
  );

  // Apply spring physics to the position offsets
  const springPosition = useSpring(positionOffset, {
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  });

  return (
    <motion.div
      className="gb-container bg-[#010012] w-full md:h-[690px] h-fit mx-auto rounded-[16px] p-[9px] relative flex items-center justify-center overflow-visible"
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
          />
        </motion.div>
      )}
    </motion.div>
  );
}
