"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import communityData from "../../../data/communityData.json";

export default function CommunityItems() {
  return (
    <motion.div 
      className="w-full px-[2rem] pt-[4rem]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-wrap justify-center gap-[16px]">
        {communityData.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-1 min-w-[220px] max-w-[300px] bg-opacity-0 p-[8px] flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={item.image} alt={item.title} width={82} height={82} />
            <h2 className="text-[24px] font-[600] text-white mt-4 ">
              {item.title}
            </h2>
            <p className="text-[16px] text-[#9e9e9e] mt-2 w-[100%]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
