"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../../styles/glowingBoxComponent.css";

export default function RightBox({ width = "100%", minWidth = "100%", image, isEven }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gb-container bg-[#010012] md:w-[547px] w-full md:h-[648px] h-[424px] mx-auto rounded-[16px] p-[9px] relative flex items-center justify-center">
      {image && (
        <motion.div
          initial={
            isMobile
              ? { top: "0rem", left: "0rem" }
              : { 
                  top: "6rem", 
                  left: isEven ? "6rem" : "-6rem",
                  opacity: 0.75 
                }
          }
          whileInView={
            isMobile
              ? { top: "0rem", left: "0rem" }
              : { 
                  top: "1.5rem", 
                  left: isEven ? "1.5rem" : "-1.5rem",
                  opacity: 1 
                }
          }
          transition={{
            duration: 0.75,
            ease: [0.16, 0.77, 0.47, 0.97], // Custom cubic-bezier curve for smoother motion
            opacity: {
              duration: 0.75,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, amount: 0.2 }} // Slightly increased amount for earlier trigger
          className="absolute w-full h-full will-change-transform" // Added will-change for performance
          style={{ borderRadius: "16px" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={`rounded-[16px] ${image.className || ""}`}
            priority={true} // Added priority for important above-the-fold images
          />
        </motion.div>
      )}
    </div>
  );
}