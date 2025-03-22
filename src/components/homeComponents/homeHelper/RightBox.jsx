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
    <div className="gb-container bg-[#010012] md:w-[547px] w-[90%] md:h-[648px] h-[424px] mx-auto rounded-[16px] p-[9px] relative flex items-center justify-center">
      {image && (
        <motion.div
          initial={{
            top: isMobile ? "3rem" : "6rem",
            left: isMobile ? "0rem" : isEven ? "6rem" : "-6rem",
          }}
          whileInView={{
            top: "0rem",
            left: "0rem",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }} // Triggers when 20% of the element is in view
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
