"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/exchangeSupport.css";
import Image from "next/image";
import GetStartedButton from '../buttons/GetStartedButton';


import FancyTitle from "@/components/homeComponents/FancyTitle";
import PricingCard from "@/components/pricingComponents/PricingCard";
import PricingButton from "@/components/pricingComponents/PricingButton";
import PricingList from "@/components/pricingComponents/PricingList";
import pricingListData from "../../data/pricingListData.json";
import pricingCardData from "../../data/pricingCardData.json";

export default function ExchangeSupportMain() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full h-full pricingMain-container overflow-visible md:p-[0px] px-[14px]">
      <div className="pricingMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="pricingMain-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FancyTitle title="Integration" />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] md:w-[80%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              Seamless Integration with Your Favorite Exchange
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[#9e9e9e] font-[400] text-[18px] md:w-[40%] md:text-center text-start pb-[26px]"
          >
            Easily connect your exchange to sync your trades or upload your trade data - we've got you covered.
          </motion.p>
          <GetStartedButton href="/XXX" text="Get Started" width="100%" />


          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="pricing-main pt-[6rem] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[54px] max-w-[1200px]"
          >
            {/* Next.js Image Component */}
            <Image
              src="/images/Exchange Support Page/ExchangeSupport_Page_Bull.png"
              alt="Exchange Support Bull"
              width={1800}
              height={1800}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
