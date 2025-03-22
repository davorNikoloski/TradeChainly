"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/exchangeSupport.css";
import Image from "next/image";
import GetStartedButton from "../buttons/GetStartedButton";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import ExchangeCards from "@/components/exchangeSupport/ExchangeCards";

// Import exchange cards data here
import exchangeCardsData from "../../data/exchangeCards.json";

export default function ExchangeSupportMain() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full h-full exchangeS-container overflow-visible md:p-[0px] px-[14px]">
      <div className="exchangeS-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="exchangeS-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-[700px] w-full">
            <FancyTitle title="Integration" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center max-w-[1050px] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
              Seamless Integration with Your Favorite Exchange
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[#BAB7C6] font-[400] text-[18px] max-w-[600px] md:text-center text-start pb-[26px]"
          >
            Easily connect your exchange to sync your trades or upload your trade data - we've got you covered.
          </motion.p>
          <GetStartedButton href="/XXX" text="Get Started" width="100%" />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
            className="pricing-main pt-[100px] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[54px] max-w-[1200px]"
          >
            {/* Next.js Image Component */}
            <Image
              src="/images/Exchange Support Page/ExchangeSupport_Page_Bull.webp"
              alt="Exchange Support Bull"
              width={1800}
              height={1800}
              className="w-full h-full object-contain max-w-[1000px]"
              priority
            />
            {/* Pass exchangeCardsData as a prop to ExchangeCards */}
            <ExchangeCards data={exchangeCardsData} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
