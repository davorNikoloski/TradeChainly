"use client"; // Ensure it's a client component

import { motion } from "framer-motion";
import { useState } from "react";
import "../../styles/pricingCard.css";

import GetStartedButton from "../buttons/GetStartedButton";
import { CheckCheck } from "lucide-react"; // Check Icon

export default function PricingCard({ data }) {
  const [isAnnual, setIsAnnual] = useState(false); // Toggle for monthly/annual pricing
  const pricing = isAnnual ? data.pricing.annual : data.pricing.monthly;

  return (
    <motion.div
      className="flex flex-wrap justify-center min-w-[349px] max-w-[349px] border test border-white/10 rounded-[14px] p-[6px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ padding: "0px" }} // Smoothly reduces padding to 0px on hover

    >
      <div className="flex-1  flex flex-col items-center justify-center text-center card-style p-[26px] rounded-[14px]">
        {/* Plan Title */}
        <div className="flex flex-col items-start w-full justify-center">
          <h2 className="text-[18px] font-[500] text-[#FFFFFF99]">{data.planTitle}</h2>

          {/* Pricing */}
          <p className="text-[48px] font-[500] text-white pt-[24px] pb-[6px]">
            ${pricing.price} 
            <span className="text-[16px] font-normal text-white">
              per {isAnnual ? "year" : "month"}
            </span>
          </p>
          <p className="text-[15px] text-[#FFFFFF99]">{data.planDescription}</p>

          <div className="py-[32px] text-center w-full">
            <GetStartedButton href="/getstarted" text="Get Started" width="285px" />
            <p className="text-[14px] text-[#FFFFFF99] pt-[12px]">{pricing.billingText}</p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-gray-700"></div>

        {/* Features Section */}
        <div className="w-full">
          <h3 className="text-[18px] font-[500] text-white py-[24px] text-start">{data.featuresTitle}</h3>

          {/* Features List */}
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
