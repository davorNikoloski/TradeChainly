"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/contact.css";
import FirstButtonComponent from "@/components/homeComponents/FirstButtonComponent";
import GetStartedButton from '../buttons/GetStartedButton';
import FancyTitle from "@/components/homeComponents/FancyTitle";

export default function ContactMain() {
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
    <div className="w-full h-full contact-container overflow-visible md:p-[0px] px-[14px]">
      <div className="contact-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        
        {/* contact Content Section (Faster Movement) */}
        <motion.div 
          className="contact-content flex flex-col gap-[1rem] items-center justify-center"
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
            <div className="max-w-[700px] w-full">
              <FancyTitle title="Contact" />
            </div>
            
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
              How can we help you?
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="text-[#BAB7C6] font-[400] text-[18px] md:w-[50%] md:text-center text-start"
          >
            Our team is dedicated to resolving any issues you encounter and ensuring a seamless experience. Reach out to us directly—we’re always here to help.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="btns-second md:w-fit w-full"
          >
            <GetStartedButton href="/XXX" text="Get Started" width="100%" />
          </motion.div>
        </motion.div>       
        
      </div>
    </div>
  );
}