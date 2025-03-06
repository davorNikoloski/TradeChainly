import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

export default function PricingList({ data = [] }) {
  // Handle cases where data is empty or undefined
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="pricing-list w-full text-center text-white text-lg">
        No pricing features available.
      </div>
    );
  }

  return (
    <div className="pricing-list w-full px-[8rem] pt-[2rem]">
      <div className="flex flex-col">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center w-full text-white text-[18px] font-[400] pb-[24px] mb-[24px] border-b border-[#637792]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Left Side - Feature Text */}
            <div className="text-left">{item.feature}</div>

            {/* Right Side - Either Text or CheckCheck Icon */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {item.value ? (
                <span className="text-[rgb(123,76,253)] text-[16px] drop-shadow-[0_0_6px_rgb(90,50,200)]">
                {item.value}
              </span>
              
              
              ) : (
              <CheckCheck className="w-4 h-4 text-[rgb(123,76,253)] drop-shadow-[0_0_6px_rgb(90,50,200)]" />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
