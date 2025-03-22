"use client";

import { motion } from "framer-motion";
import "../../styles/pricingCard.css";
import GetStartedButton from "../buttons/GetStartedButton";
import { CheckCheck } from "lucide-react";

export default function PricingCard({ data, isAnnual }) {
  const pricing = isAnnual ? data.pricing.annual : data.pricing.monthly;

  return (
    <motion.div
      className="flex flex-wrap justify-center min-w-[349px] max-w-[349px] border border-white/10 rounded-[14px]"
      initial={{ opacity: 0, y: 20, padding: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ padding: 0 }} // Animate padding on hover
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center card-style p-[26px] rounded-[14px]">
        <div className="flex flex-col items-start w-full justify-center">
          <h2 className="text-[18px] font-[500] text-[#FFFFFF99]">{data.planTitle}</h2>

          {/* Pricing with Motion Animation */}
          <motion.p
            key={isAnnual} // Key change triggers animation on toggle
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-[48px] font-[500] text-white pt-[24px] pb-[6px] leading-none"
          >
            ${pricing.price}
            <sup className="text-[16px] font-normal text-white align-super">99</sup>
            <span className="text-[16px] font-normal text-white">
              per {isAnnual ? "year" : "month"}
            </span>
          </motion.p>

          <motion.p
            key={`billing-${isAnnual}`} // Ensures smooth transition for billing text
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-[15px] text-[#FFFFFF99]"
          >
            {pricing.billingText}
          </motion.p>

          <div className="py-[32px] text-center w-full">
            <GetStartedButton href="/getstarted" text="Get Started" width="285px" />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-gray-700"></div>

        {/* Features Section */}
        <div className="w-full">
          <h3 className="text-[18px] font-[500] text-white py-[24px] text-start">
            {data.featuresTitle}
          </h3>

          <ul className="text-white space-y-[12px] text-start w-full">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center text-[14px] text-gray-300">
                <CheckCheck className="w-4 h-4 text-white mr-[12px]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
