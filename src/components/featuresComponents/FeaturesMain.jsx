"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/features.css";
import FirstButtonComponent from "@/components/homeComponents/FirstButtonComponent";
import GetStartedButton from '../buttons/GetStartedButton';
import FancyTitle from "@/components/homeComponents/FancyTitle";

export default function FeaturesMain() {
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
    <div className="w-full h-full featuresMain-container overflow-visible md:p-[0px] px-[14px]">
      <div className="featuresMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        
        {/* featuresMain Content Section (Faster Movement) */}
        <motion.div 
          className="featuresMain-content flex flex-col gap-[1rem] items-center justify-center"
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
            <FancyTitle title="Features" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="title-content flex flex-col items-center md:w-[700px] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
                Everything You Need to Trade Smarter
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="text-[#BAB7C6] font-[400] text-[18px] md:text-center text-start max-w-[600px]"
          >
            Stay ahead of the curve with cutting-edge features that turn data into decisions and strategies into success.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="btns-second md:w-fit w-full m-[0.8rem]"
          >
            <FirstButtonComponent 
              leftText="Whats New" 
              rightText="Smarter Journaling" 
            />
          </motion.div>
        </motion.div>       
        
      </div>
    </div>
  );
}