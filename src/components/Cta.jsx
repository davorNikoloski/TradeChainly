"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GetStartedButton from "./buttons/GetStartedButton";
import "../styles/cta.css";

export default function Cta() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setIsTextVisible(true);
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
  }, [hasAnimated]);

  return (
    <div className="px-[2rem] mx-auto max-w-[1200px]">
      <div className="cta-container mx-auto w-full md:h-[649.46px] p-[19px] md:p-[29px] md:pr-[0px] rounded-[16px] bg-[#010012] overflow-hidden">
        <div className="w-full h-full flex justify-between items-center flex-col md:flex-row gap-[32px]">
          <div className="cta-content flex flex-col items-center justify-center md:gap-[28px] gap-[2px]">
            <div className="md:space-y-[28px] pt-[24px] pb-[12px] md:p-[0px] flex items-center flex-col">
              <h1
                className={`text-center font-mulish text-white text-[27px] md:text-[40px] leading-tight md:leading-[3rem] transition-opacity duration-700 md:pb-[0px] pb-[2px] ${
                  hasAnimated ? "opacity-100" : "opacity-0"
                }`}
              >
                Elevate Your Trading Journey With Us
              </h1>
              <p
                className={`text-center font-inter text-[#9e9e9e] text-sm font-normal mt-0 mb-2 md:leading-6 leading-tight max-w-[80%] transition-opacity duration-700 ${
                  hasAnimated ? "opacity-100" : "opacity-0"
                }`}
              >
                Transform your trading with powerful tools that help you improve as a trader.
              </p>
            </div>

            {/* Motion div to handle button visibility and position */}
            <motion.div
              className="cta-button-wrapper relative"
              initial={{ opacity: 0, bottom: -50 }}
              animate={hasAnimated ? { opacity: 1, bottom: 0 } : {}}
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
            className="cta-image-container p-[9px] pr-[0px] m-[0.8px] md:h-full md:w-[80%] border border-[#2D2C2C] bg-[#18163e8f] rounded-tl-[12px] rounded-bl-[12px] overflow-hidden"
            ref={imageRef}
          >
            <motion.div
              initial={{ opacity: 0, x: "22%" }}
              animate={hasAnimated ? { opacity: 1, x: "0%" } : {}}
              transition={{ duration: 0.75 }}
              className="h-full"
            >
              <Image
                src="/images/Landing Page/Features Section/1.png"
                alt="App Preview"
                width={956}
                height={570}
                className="app-image w-auto md:h-full object-cover object-left rounded-tl-[12px] rounded-bl-[12px]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
