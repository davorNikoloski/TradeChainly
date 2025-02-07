"use client"; // This makes it a Client Component

import { useState, useEffect } from "react";
import ProgressBar from "@/components/homeComponents/ProgressBar ";

export default function FancyTitle() {
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
    <div className="w-full h-full">
      <div className="w-full flex flex-row justify-center items-center">
        <ProgressBar progress={100} width={progressWidth} direction="ltr" />
        <h2 className="md:px-[4rem] px-[2rem] text-[18px]">Features</h2>
        <ProgressBar progress={100} width={progressWidth} direction="rtl" />
      </div>
    </div>
  );
}
