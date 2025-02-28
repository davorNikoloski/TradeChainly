"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/features.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import PricingCard from "@/components/pricingComponents/PricingCard";
import pricingCardData from "../../data/pricingCardData.json";

export default function PricingMain() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const delayedScrollProgress = useMotionValue(0); // Use a motion value for delayed scroll progress

  // Track scroll progress and introduce a 1-second delay
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsScrolling(true);

      // Introduce a 100ms delay before updating the delayedScrollProgress
      const timeout = setTimeout(() => {
        delayedScrollProgress.set(latest); // Update the motion value
      }, 100); // 100ms delay

      return () => clearTimeout(timeout);
    });

    return () => unsubscribe();
  }, [scrollYProgress, delayedScrollProgress]);

  // Apply spring animations to make the motion smoother and bouncy

  return (
    <div className="w-full h-full pricingMain-container overflow-visible md:p-[0px] px-[14px]">
      <div className="pricingMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        
        {/* featuresMain Content Section (Faster Movement) */}
        <motion.div 
          className="pricingMain-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }} 
          animate={{ opacity: 1, y: "0rem" }} 
          transition={{ duration: 0.8, ease: "easeOut" }} // Updated transition
        >
          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="btns-first w-full "
          >
            <FancyTitle title="Pricing" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] md:w-[80%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              Simple Pricing
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="text-[#9e9e9e] font-[400] text-[18px] md:w-[80%] md:text-center text-start"
          >
            One plan designed to meet all your trading needs, helping you grow and stay ahead in the market.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="btns-second md:w-fit w-full"
          >

          <div className="pricing-main pt-[40px] w-screen h-full flex flex-col items-center justify-center overflow-visible">
              <PricingCard data={pricingCardData} />
          </div>
          </motion.div>
        </motion.div>       
        
      </div>
    </div>
  );
}