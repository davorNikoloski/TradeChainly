import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../../styles/glowingBoxComponent.css";

export default function RightBox({ width = "100%", minWidth = "100%", image, isEven }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gb-container bg-[#010012] md:w-[547px] w-[90%] md:h-[648px] h-[424px] mx-auto rounded-[16px] p-[9px] relative flex items-center justify-center">
      {image && (
        <motion.div
          initial={{
            top: isMobile ? "0rem" : "3rem",
            left: isMobile ? "0rem" : isEven ? "3rem" : "-3rem",
          }}
          animate={{
            top: isMobile ? "0rem" : "3rem",
            left: isMobile ? "0rem" : isEven ? "3rem" : "-3rem",
          }}
          whileHover={{ top: "0rem", left: "0rem" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute w-full h-full"
          style={{ borderRadius: "16px" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={`rounded-[16px] ${image.className || ""}`}
          />
        </motion.div>
      )}
    </div>
  );
}