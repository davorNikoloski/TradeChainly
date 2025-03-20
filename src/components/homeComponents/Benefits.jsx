"use client";

import FancyTitle from "@/components/homeComponents/FancyTitle";
import BenefitsCards from "@/components/homeComponents/homeHelper/BenefitsCards";
import "../../styles/benefitsCard.css";
import { motion } from "framer-motion";
import benefitsData from "../../data/benefitsData.json";

  
export default function Benefits() {
  return (
    <div className="w-full h-full benefits-container overflow-visible md:p-[0px] px-[14px] md:pt-[28px] ">
      <div className="integrations-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Header Section */}
        <motion.div 
          className="benefits-title w-full flex items-center justify-center flex-col gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FancyTitle title="Benefits" />
          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Why Traders Love TradeChainly
          </h1>
          <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[50%]">
            Built with a deep understanding of traders' needs, TradeChainly keeps you organized and guides you to smarter choices every step of the way.
          </p>
        </motion.div>

        {/* Features Sections (Dynamically Rendered) */}
        <div className="benefits-main pt-[40px] w-full h-full flex flex-col gap-[60px] gradient-bg-benefits">
          <BenefitsCards data={benefitsData} />
        </div>
      </div>
    </div>
  );
}
