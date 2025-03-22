"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/features.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";

export default function TermsAndConditionsMain({ data }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full h-full termsAndConditions-container overflow-visible md:p-[0px] px-[14px] max-w-[1200px]">
      <div className="termsAndConditions-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="termsAndConditions-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* FancyTitle Component for Terms of Service */}
          <div className="max-w-[700px] w-full">
            <FancyTitle title="T&C" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            {/* Display Terms of Service Title */}
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
              {data.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="termsAndConditions-main pt-[1rem] w-full h-full flex flex-col items-center justify-center overflow-visible gap-[7rem]"
          >
            {/* Display Note */}
            <div className="note max-w-[700px] text-[18px] text-center" style={{ color: "rgb(156, 163, 175)" }}>
              <p>{data.note}</p>
            </div>

            {/* Display Terms of Service */}
            <div className="terms w-full flex flex-col gap-[7rem] items-center">
              {data.terms.map((term, index) => (
                <div key={term.id} className="term-card w-full md:w-[80%] text-center space-y-[20px]">
                  <div className="flex items-center justify-center gap-[1rem]">
                    {/* Numbered Circle */}
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#7247E7] bg-[#7247E7]/5 rounded-[8px] shadow-[inset_0_0_5px_#9B70FF]">
                      <span className="text-white font-semibold text-[18px]">
                        {index + 1}
                      </span>
                    </div>

                    {/* Term Title */}
                    <h2 className="text-[28px] font-[500] text-white">{term.term}</h2>
                  </div>

                  {/* Term Description */}
                  <p className="text-[18px] font-[400]" style={{ color: "rgb(156, 163, 175)" }}>
                    {term.description}
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
