"use client"; // This makes it a Client Component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/homeComponents/ProgressBar ";

export default function FancyTitle({ title }) {
  const [progressWidth, setProgressWidth] = useState("40%");

  useEffect(() => {
    const updateWidth = () => {
      setProgressWidth(window.innerWidth >= 1024 ? "200%" : "100%");
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }} // Starts 20px BELOW
      whileInView={{ opacity: 1, y: 0 }} // Moves UP to normal position
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is in view
    >
      <div className="w-full flex flex-row justify-center items-center">
        <ProgressBar progress={100} width={progressWidth} direction="ltr" />
        <h2 className="md:px-[4rem] px-[2rem] text-[16px] text-[#D7D5DE]">{title}</h2>
        <ProgressBar progress={100} width={progressWidth} direction="rtl" />
      </div>
    </motion.div>
  );
}
