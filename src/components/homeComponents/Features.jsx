"use client";

import "../../styles/hero.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import FeatruesSections from "@/components/homeComponents/FeatruesSections";
import featuresData from "../../data/featuresData.json";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="w-full h-full features-container overflow-visible md:p-[0px] px-[14px]">
      <div className="features-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Header Section with motion */}
        <motion.div 
          className="features-title w-full flex items-center justify-center flex-col gap-[14px]"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-[700px] w-full">
            <FancyTitle title="Features" />
          </div>

          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Powerful Features
          </h1>
          <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[50%]">
            You focus on trading while we do the heavy lifting for you. With cutting-edge features, we help you trade smarter and stay ahead of the market.
          </p>
        </motion.div>

        {/* Features Sections (Dynamically Rendered) */}
        <div className="features-main pt-[40px] w-full h-full flex flex-col gap-[90px]">
          {featuresData.map((data, index) => (
            <FeatruesSections 
              key={index} 
              title={data.title} 
              description={data.description} 
              features={data.features} 
              image={data.image} // Pass image dynamically
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
