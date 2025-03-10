"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/features.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import PricingCard from "@/components/pricingComponents/PricingCard";
import PricingButton from "@/components/pricingComponents/PricingButton";
import PricingList from "@/components/pricingComponents/PricingList";
import pricingListData from "../../data/pricingListData.json";
import pricingCardData from "../../data/pricingCardData.json";

export default function PricingMain() {
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
          <FancyTitle title="Pricing" />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] md:w-[80%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              Simple Pricing
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[#9e9e9e] font-[400] text-[18px] md:w-[40%] md:text-center text-start pb-[56px]"
          >
            One plan designed to meet all your trading needs, helping you grow and stay ahead in the market.
          </motion.p>

          <PricingButton onSelect={(plan) => setIsAnnual(plan === "Annually")} />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="pricing-main pt-[6rem] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[54px]"
          >
            <PricingCard data={pricingCardData} isAnnual={isAnnual} />
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start pt-[2rem] font-mulish md:leading-[5rem] md:w-[60%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              All You Need to Take Your Trading to the Next Level
            </h1>
            <PricingList data={pricingListData} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
