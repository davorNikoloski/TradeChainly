"use client";

import { motion } from "framer-motion";
import GetStartedButton from "../../buttons/GetStartedButton";
import CheckIconHolder from "./CheckIconHolder";

export default function FeaturesLeftSection({ title, description, features }) {
  return (
    <motion.div
      className="w-full h-full left-section flex items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col">
        {/* Top Section */}
        <div className="top-sec flex flex-col gap-[16px] mt-[24px] mb-[32px]">
          <h1 className="text-[34px] font-[450] text-white w-[85%]">{title}</h1>
          <p className="text-[#9e9e9e] text-[16px] font-[400] w-[75%]">
            {description}
          </p>
          <GetStartedButton
            href="/contact"
            text="Get Started"
            showArrow={true}
            width="150px"
          />
        </div>

        {/* Bottom Section - Features List */}
        <div className="bottom-sec flex flex-col gap-[12px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-center gap-[12px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CheckIconHolder />
              <p className="text-[#9e9e9e] text-[16px] font-[400]">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
