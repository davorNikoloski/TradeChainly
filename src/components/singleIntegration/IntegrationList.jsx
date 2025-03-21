"use client";

import { motion } from "framer-motion";

export default function IntegrationList({ data = {}, selectedExchange }) {
  console.log("🔍 Debug: IntegrationList data:", data);
  console.log("🔍 Debug: Selected Exchange:", selectedExchange);

  if (typeof data !== "object" || Array.isArray(data)) {
    console.error("❌ integrationListData is invalid:", data);
    return <p className="text-white text-lg">Error: Integration data is invalid.</p>;
  }

  // Normalize exchange name for case-insensitive lookup
  const normalizedExchange = Object.keys(data).find(
    (key) => key.toLowerCase() === selectedExchange?.toLowerCase()
  );

  console.log("🔍 Debug: Normalized Exchange Key:", normalizedExchange);

  const filteredData = normalizedExchange ? data[normalizedExchange] : null;

  if (!filteredData) {
    return <p className="text-white text-lg">No integration data available for {selectedExchange}.</p>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-12 px-[2rem]">
      {filteredData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="w-full flex flex-col gap-[3rem]">
          {/* Section Title */}
          <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] w-full leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
            {section.title}
          </h1>

          {/* List Items */}
          <div className="flex flex-col w-full">
            {section.items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between w-full text-white text-[18px] font-[400] pb-[24px] mb-[24px] border-b border-[#637792]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Left Side - Instruction Text */}
                <div className="text-left">{item}</div>

                {/* Numbered Circle */}
                <motion.div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#7247E7] bg-[#7247E7]/5 rounded-[8px] shadow-[inset_0_0_5px_#9B70FF]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-semibold text-[18px]">
                    {index + 1}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
