import { motion } from 'framer-motion';
import { PlusCircle, XCircle } from "lucide-react";
import { useState } from 'react';

export default function FaqList({ faqData }) {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index) // Remove index if it's already in the array
        : [...prevIndices, index] // Add index if it's not in the array
    );
  };

  return (
    <div className="faq-right w-auto md:max-w-[75%]">
      <div className="faq-list flex flex-col ">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item ">
            <button
              className="flex flex-col justify-start items-center w-full text-left text-white text-[18px] font-[400] gap-[rem] pb-[32px] mb-[32px] border-b border-[#637792]"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center gap-4 w-full">
                <motion.div
                  className="flex justify-center items-center w-6 h-6"
                  animate={{
                    rotate: openIndices.includes(index) ? 300 : 0, // 5 full rotations (360° * 5)
                  }}
                  transition={{
                    duration: 0.6, // 600ms duration for smooth rotation
                    ease: "easeInOut", // Smooth ease-in and ease-out
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
                animate={openIndices.includes(index) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#bdbdbdb3] pt-[8px] text-[16px] leading-[1.4]">{faq.answer}</p>
              </motion.div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}