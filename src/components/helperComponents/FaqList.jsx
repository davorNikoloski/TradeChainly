"use client";

import { motion } from "framer-motion";
import { PlusCircle, XCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FaqList({ faqData }) {
  const [openIndices, setOpenIndices] = useState([]);
  const pathname = usePathname();
  const [pageKey, setPageKey] = useState(0); // Force remount

  // Reset animation + open state on route change
  useEffect(() => {
    setOpenIndices([]);
    setPageKey((prev) => prev + 1); // Force rerender to re-trigger viewport animation
  }, [pathname]);

  const toggleFaq = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div key={pageKey} className="faq-right w-auto md:max-w-[75%]">
      <div className="faq-list flex flex-col">
        {faqData.map((faq, index) => {
          const isLastItem = index === faqData.length - 1;

          return (
            <motion.div
              key={index}
              className={`faq-item ${!isLastItem ? "mb-[32px]" : ""} pb-[32px] border-b border-[#637792]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button
                className="flex flex-col justify-start items-center w-full text-left text-white text-[18px] font-[400]"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-4 w-full">
                  <motion.div
                    className="flex justify-center items-center w-6 h-6"
                    animate={{
                      rotate: openIndices.includes(index) ? 300 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {openIndices.includes(index) ? (
                      <XCircle className="text-[#7649EC] w-6 h-6" />
                    ) : (
                      <PlusCircle className="text-[#7649EC] w-6 h-6" />
                    )}
                  </motion.div>
                  {faq.question}
                </div>

                <motion.div
                  className="overflow-hidden w-full"
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndices.includes(index)
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#bdbdbdb3] pt-[8px] text-[16px] leading-[1.4]">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
