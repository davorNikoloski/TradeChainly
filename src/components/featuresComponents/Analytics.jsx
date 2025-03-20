"use client";

import "../../styles/hero.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import SubCardsComponent from "@/components/featuresComponents/SubCardsComponent";
import { motion } from "framer-motion";
import analyticsCardData from "../../data/analyticsCardData.json";

export default function Analytics() {
  return (
    <div className="w-full h-full analytics-container overflow-visible md:p-[0px] px-[14px]">
      <div className="analytics-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Header Section with motion */}
        <motion.div 
          className="analytics-title w-full flex items-center justify-center flex-col gap-[12px]"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FancyTitle title="Analytics" />
          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Insightful Analytics 
          </h1>
          <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[40%]">
            Unlock a comprehensive view of your trading performance. Visualize key statistics, analyze tag-specific outcomes, and dissect data effortlessly to elevate your trading game.
          </p>
        </motion.div>

        {/* Features Sections (Dynamically Rendered) */}
        <div className="analytics-main pt-[40px] w-full h-full flex md:flex-row flex-col gap-[38px] items-center justify-center ">
            {analyticsCardData.map((item) => (
                <SubCardsComponent key={item.id} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
