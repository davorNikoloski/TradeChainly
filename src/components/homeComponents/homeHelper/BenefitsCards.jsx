"use client"; // Ensure it's a client component

import { motion } from "framer-motion";
import Image from "next/image";
import "../../../styles/benefitsCard.css";

export default function BenefitsCards({ data }) {
  return (
    <div className="w-full px-[2rem]">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((benefit) => (
          <motion.div
            key={benefit.id}
            className="flex-1 min-w-[220px] max-w-[320px] bg-opacity-0 border border-white/10 rounded-[14px] p-[8px] flex flex-col items-center justify-center text-center h-[24rem]"
            style={{ flexBasis: "calc(33.333% - 24px)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ padding: "0px" }} // Smoothly reduces padding to 0px on hover
          >
            {/* White Content Box Inside */}
            <div className="w-full h-full card-style flex flex-col items-center justify-center rounded-[14px] p-6">
              <Image src={benefit.image} alt={benefit.title} width={60} height={60} />
              <h2 className="text-[18px] font-[600] text-white mt-4 pt-[16px]">
                {benefit.title}
              </h2>
              <p className="text-[16px] text[#9ca3af] mt-2 max-w-[200px]">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
