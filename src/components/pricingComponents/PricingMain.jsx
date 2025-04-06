"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/features.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import PricingCard from "@/components/pricingComponents/PricingCard";
import PricingButton from "@/components/pricingComponents/PricingButton";
import PricingList from "@/components/pricingComponents/PricingList";

import GetStartedButton from '../buttons/GetStartedButton';

export default function PricingMain({ pricingListData, pricingCardData }) {
  const [isAnnual, setIsAnnual] = useState(true); // Changed default to true

  return (
    <div className="w-full h-full pricingMain-container overflow-visible md:p-[0px] px-[14px]">
      <div className="pricingMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="pricingMain-content flex flex-col md:items-center items-start justify-center w-full"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-[1rem] md:items-center items-start justify-center w-full">
            <div className="max-w-[1200px] w-full">
              <FancyTitle title="Pricing" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: "1.5rem" }}
              animate={{ opacity: 1, y: "0rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
            >
              <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
                Simple Pricing
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: "1.5rem" }}
              animate={{ opacity: 1, y: "0rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[#BAB7C6] font-[400] text-[18px] max-w-[600px] md:text-center text-start"
            >
              One plan designed to meet all your trading needs, helping you grow and stay ahead in the market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: "1.5rem" }}
              animate={{ opacity: 1, y: "0rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full md:w-fit mt-[0.6rem]"
            >
              <GetStartedButton href="https://app.tradechainly.website/" text="Get Started" width="100%" />
            </motion.div>

          </div>
          

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:pt-[100px] pt-[50px] w-full flex items-center justify-center md:pb-[3rem] pb-[30px]"
          >
            <PricingButton onSelect={(plan) => setIsAnnual(plan === "Annually")} defaultSelected="Annually" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
            className="pricing-main w-full h-full flex flex-col items-center justify-center overflow-visible md:gap-[54px] gap-[18px]"
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