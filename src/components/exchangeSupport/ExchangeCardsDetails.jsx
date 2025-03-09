"use client"; // Ensures it's a client component

import { motion } from "framer-motion";
import Image from "next/image";
import "../../styles/exchangeCards.css";
import GetStartedButton from "../buttons/GetStartedButton";

export default function ExchangeCardsDetails({ data }) {
  return (
    <div className="w-full px-[2rem] flex flex-wrap justify-center gap-6">
      {data.map((exchange) => (
        <motion.div
          key={exchange.id}
          className="flex flex-col border border-white/10 rounded-[14px] p-[8px] text-center w-full max-w-[360px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ padding: "0px" }}
        >
          <div className="flex flex-col exchange-card-style rounded-[14px] h-full py-[2rem] space-y-[1.4rem]">
            {/* Top Section: Image Left, Name Right */}
            <div className="flex items-center justify-center p-[1.3rem] gap-[1.2rem]">
              {/* Left - Exchange Logo */}
              <div className="w-[60px] h-[60px] flex-shrink-0 border-2 rounded-[8px] border-[#7D4DFF] p-[8px]">
                <Image src={exchange.image} alt={exchange.name} width={60} height={60} />
              </div>

              {/* Right - Exchange Name */}
              <div className="flex flex-col items-center justify-center gap-[0.6rem]">
                <h2 className="text-[18px] font-[600] text-white">{exchange.name}</h2>
                <GetStartedButton href={`/singleIntegration/${exchange.name.toLowerCase().replace(/\s+/g, '-')}`} text="Get Started" width="100%" />
                </div>
            </div>

            {/* Bottom Section with Three Columns */}
            <div className="flex flex-col p-[1.3rem] gap-8 ">
              {/* Column Headers */}
              <div className="flex flex-row w-full gap-4 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-transparent select-none">Placeholder</h3> {/* Invisible text for spacing */}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white/80 text-[16px] font-[500]">Spot</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white/80 text-[16px] font-[500]">Features</h3>
                </div>
              </div>

              {/* Columns with Data */}
              <div className="flex flex-row w-full items-center justify-between">
                {/* Column 1: Feature Names */}
                <div className="flex flex-col gap-2 items-center justify-between w-[24%] h-full">
                  {exchange.features.map((feature, index) => (
                    <span key={index} className="text-[#9e9e9e]">{feature.replace(/_/g, ' ')}</span>
                  ))}
                </div>

                {/* Column 2: Spot Information */}
                <div className="flex flex-col gap-2 items-center justify-between h-full">
                  {exchange.spot.map((spot, index) => (
                    <span key={index} className="text-[#9e9e9e] ">{spot}</span>
                  ))}
                </div>

                {/* Column 3: Features Display */}
                <div className="flex flex-col gap-2 items-center justify-between h-full">
                  {exchange.features_display.map((display, index) => (
                    <span key={index} className="text-[#9e9e9e]">{display}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
