"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/features.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";

export default function PrivacyPolicyMain({ data }) {
  const [isAnnual, setIsAnnual] = useState(false);

  // Function to handle line breaks and render them as <br />
  const renderTextWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="w-full h-full privacyPolicyMain-container overflow-visible md:p-[0px] px-[14px] max-w-[1200px]">
      <div className="privacyPolicyMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="privacyPolicyMain-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* FancyTitle Component for Policy */}
          <FancyTitle title="Policy" />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            {/* Display Privacy Policy Title */}
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] md:w-[80%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              {data.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="privacyPolicy-main pt-[1rem] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[7rem]"
          >
            {/* Display the Introduction */}
            <div className="introduction md:w-[80%] text-[#9e9e9e] text-[18px] text-center">
              {/* Render introduction text with line breaks */}
              {renderTextWithBreaks(data.introduction)}
            </div>

            {/* Display Privacy Policies */}
            <div className="policies w-full flex flex-col gap-[7rem] items-center">
              {data.policies.map((policy) => (
                <div key={policy.id} className="policy-card w-full md:w-[80%] text-center space-y-[20px]">
                  <h2 className="text-[28px] font-[500]">{policy.policy}</h2>
                  <p className="text-[#9e9e9e] text-[18px] font-[400]">
                    {/* Render the description with line breaks */}
                    {renderTextWithBreaks(policy.description)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
