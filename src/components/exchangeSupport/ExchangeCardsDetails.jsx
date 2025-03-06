"use client"; // Ensures it's a client component

import { motion } from "framer-motion";
import Image from "next/image";
import "../../styles/benefitsCard.css";

export default function ExchangeCardsDetails({ data }) {
  return (
    <div className="w-full px-[2rem] flex flex-wrap justify-center gap-6">
      {data.map((exchange) => (
        <motion.div
          key={exchange.id}
          className="flex flex-col bg-opacity-0 border border-white/10 rounded-[14px] p-[8px] text-center w-full max-w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ padding: "0px" }}
        >
          {/* Top Section: Image Left, Name Right */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            {/* Left - Exchange Logo */}
            <div className="w-[60px] h-[60px] flex-shrink-0">
              <Image src={exchange.image} alt={exchange.name} width={60} height={60} />
            </div>

            {/* Right - Exchange Name */}
            <h2 className="text-[18px] font-[600] text-white">{exchange.name}</h2>
          </div>

          {/* Bottom Section: Exchange Features */}
          <div className="flex flex-col items-center p-6 gap-4">
            <div className="flex justify-between w-full">
              <span className="text-white/70">Spot:</span>
              <span className="text-white">{exchange.spot}</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-white/70">Pairs:</span>
              <span className="text-white">{exchange.pairs}</span>
            </div>

            {/* Features Section */}
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-white/80 text-[16px] font-[500]">Features:</h3>
              <div className="flex justify-between w-full">
                <span className="text-white/70">Auto Sync:</span>
                <span className="text-white">{exchange.features.auto_sync ? "✔️" : "❌"}</span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-white/70">File Upload:</span>
                <span className="text-white">{exchange.features.file_upload ? "✔️" : "❌"}</span>
              </div>
              <div className="flex justify-between w-full">
                <span className="text-white/70">Manual Entry:</span>
                <span className="text-white">{exchange.features.manual_entry ? "✔️" : "❌"}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
