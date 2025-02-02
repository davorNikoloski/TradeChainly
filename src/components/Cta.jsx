"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import GetStartedButton from './buttons/GetStartedButton';
import '../styles/cta.css';

export default function Cta() {
  const [isInView, setIsInView] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsTextVisible(true);
        } else {
          setIsInView(false);
          setIsTextVisible(false);
        }
      },
      {
        threshold: 0,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="cta-container max-w-[1200px] mx-auto w-full h-[649.46px] p-[29px] pr-[0px] rounded-[16px] bg-[#010012] overflow-hidden">
        <div className="w-full h-full flex justify-between items-center">
            <div className="cta-content flex flex-col items-center justify-center min-w-[430px] w-[430px] gap-[28px]">
                <h1 
                  className={`text-center font-mulish text-white text-4xl leading-[3rem] transition-opacity duration-700 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    Elevate Your Trading Journey With Us
                </h1>
                <p 
                  className={`text-center font-inter text-gray-500 text-sm font-normal mt-0 mb-2 leading-6 max-w-[90%] transition-opacity duration-700 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    Transform your trading with powerful tools that help you improve as a trader.
                </p>

                {/* Motion div to handle button visibility and position */}
                <motion.div
                  className="cta-button-wrapper relative"
                  initial={{ opacity: 0, bottom: -50 }}
                  animate={{ opacity: isInView ? 1 : 0, bottom: isInView ? 0 : -50 }}
                  transition={{ duration: 0.7 }}
                >
                  <GetStartedButton 
                    href="/XXX" 
                    text="Get Started Today" 
                    showArrow={false} 
                    width="200px"
                  />
                </motion.div>
            </div>

            {/* Motion div for image visibility and position */}
            <motion.div 
  className="cta-image-container p-[9px] pr-[0px] m-[0.8px] h-full w-[80%] border border-[#2D2C2C] bg-[#18163e8f] rounded-tl-[12px] rounded-bl-[12px] overflow-hidden"
  ref={imageRef}
>
  <motion.div
    initial={{ opacity: 0, x: "22%" }} // Moves from 22% to 0 on X-axis
    animate={{ opacity: isInView ? 1 : 0, x: isInView ? "0%" : "22%" }}
    transition={{ duration: 0.75 }}
    className="h-full"
  >
    <Image
      src="/images/Landing Page/Features Section/1.png"
      alt="App Preview"
      width={956}
      height={570}
      className="app-image w-auto h-full object-cover object-left rounded-tl-[12px] rounded-bl-[12px]"
      priority
    />
  </motion.div>
</motion.div>

        </div>
    </div>
  );
}
