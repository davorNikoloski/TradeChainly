"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/hero.css";
import FirstButtonComponent from "@/components/homeComponents/FirstButtonComponent";
import GlowingBoxComponent from "@/components/GlowingBoxComponent";
import GetStartedButton from '../buttons/GetStartedButton';
import Image from "next/image";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const delayedScrollProgress = useMotionValue(0); // Use a motion value for delayed scroll progress
  const scrollProgress = useMotionValue(0);
  const [enableSpring, setEnableSpring] = useState(false);

  // Track scroll progress and introduce a 100ms delay
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsScrolling(true);
      scrollProgress.set(latest);
      // Introduce a 100ms delay before updating the delayedScrollProgress
      const timeout = setTimeout(() => {
        delayedScrollProgress.set(latest); // Update the motion value
      }, 100); // 100ms delay

      return () => clearTimeout(timeout);
    });

    // Sync the initial scroll position
    delayedScrollProgress.set(scrollYProgress.get());

    return () => unsubscribe();
  }, [scrollYProgress, delayedScrollProgress]);

  // Faster movement for content (applied after delay)
  const contentY = useTransform(delayedScrollProgress, [0, 0.07], [0, 250]); // Moves more pixels per scroll
  const contentOpacity = useTransform(delayedScrollProgress, [0, 0.07], [1, 0]); // Fades out quickly

  // Slower movement for image (applied after delay)
  const imageY = useTransform(delayedScrollProgress, [0, 0.07], [0, 100]); // Moves fewer pixels per scroll
  const imageOpacity = useTransform(delayedScrollProgress, [0, 0.1], [1, 0]); // Fades out slower

  // Apply spring animations to make the motion smoother and bouncy
  const springContentY = useSpring(contentY, {
    stiffness: 100, // Controls the rigidity of the spring
    damping: 10, // Controls the bounciness (lower = more bouncy)
    mass: 0.6, // Controls the weight of the object
  });

  const springContentOpacity = useSpring(contentOpacity, {
    stiffness: 100,
    damping: 10,
    mass: 0.6,
  });

  const springImageY = useSpring(imageY, {
    stiffness: 100,
    damping: 10,
    mass: 0.6,
  });

  const springImageOpacity = useSpring(imageOpacity, {
    stiffness: 100,
    damping: 10,
    mass: 0.6,
  });

  return (
    <div className="w-full h-full hero-container overflow-visible md:p-[0px] px-[14px]">
      <div className="hero-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        
        {/* Hero Content Section (Faster Movement) */}
        <motion.div 
          className="hero-content flex flex-col gap-[1rem] items-center justify-center"
          style={{ y: springContentY, opacity: springContentOpacity }} // Apply spring animations
        >
          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="btns-first w-full md:w-auto mb-[0.2rem] mt-[0.8rem]"
          >
            <FirstButtonComponent />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="title-content flex flex-col items-center md:w-[900px] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
              All-in-One Crypto Journal to Find Your Trading Edge
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: "1.5rem" }} 
            animate={{ opacity: 1, y: "0rem" }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Updated transition
            className="text-[#BAB7C6] font-[400] text-[18px] md:text-center text-start max-w-[600px] "
          >
            Unlock your potential with powerful journaling tools and insights to make smarter, data-driven trading decisions.
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

        {/* Hero Image (Slower Movement) */}
        <motion.div 
          initial={{ opacity: 0, y: "14rem" }} 
          animate={{ opacity: 1, y: "0rem" }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          className="hero-image flex items-center"
          onAnimationComplete={() => {
            setEnableSpring(true); // Start applying spring animation after initial animation
          }}
          style={{ opacity: springImageOpacity, y: enableSpring ? springImageY : "0rem" }} // Only apply spring when enabled
        >
          <Image
            src="/images/Landing Page/Hero Section/Landing_Page_Bull.svg"
            alt="App Logo"
            width={50}
            height={40}
            className="w-[30rem]"
          />
        </motion.div>

        {/* Glowing Box Section */}
        <motion.div 
          initial={{ opacity: 0.5, y: "4rem" }} 
          animate={{ opacity: 1, y: "0rem" }} 
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // Slightly delayed
          className="image flex items-center justify-center relative top-[-5rem] w-full"
        >
          <GlowingBoxComponent  
            image={{
              src: "/images/Landing Page/Features Section/1.png",
              alt: "App Logo",
              width: 1200,
              height: 1200,
              className: "custom-image-class",
            }}
            delayedScrollProgress={scrollProgress} 
          />
        </motion.div>
      </div>
    </div>
  );
}