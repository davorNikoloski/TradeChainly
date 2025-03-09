"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../styles/exchangeCards.css";

import FancyTitle from "@/components/homeComponents/FancyTitle";
import exchangeCardsData from "../../data/exchangeCards.json";
import integrationListData from "../../data/integrationListData.json";

import IntegrationList from "@/components/singleIntegration/IntegrationList";

export default function SingleIntegration() {
  const params = useParams();
  const exchangeName = params?.id || params?.name; // Adjust based on route setup

  // Find the exchange data dynamically
  const exchange = useMemo(() => {
    return exchangeCardsData.find(
      (ex) => ex.name.toLowerCase() === exchangeName?.toLowerCase()
    );
  }, [exchangeName]);

  return (
    <div className="w-full h-full pricingMain-container overflow-visible md:p-[0px] px-[14px]">
      <div className="pricingMain-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="pricingMain-content flex flex-col gap-[1rem] items-center justify-center"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FancyTitle title="Integration" />

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="title-content flex flex-col items-center md:w-[75%] gap-[22px]"
          >
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish md:leading-[5rem] md:w-[80%] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text">
              Integrating With {exchange?.name || "Exchange"}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="pricing-main pt-[6rem] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[54px] max-w-[1200px] "
          >
            {/* Exchange Details Section */}
            {exchange ? (
              <div className="tab flex flex-col w-fit h-full p-[2rem] rounded-lg ">
                <div className="flex items-center justify-center p-[1.3rem] gap-[2.2rem]">
                  {/* Exchange Logo */}
                  <div className="w-[60px] h-[60px] flex-shrink-0 border-2 rounded-[8px] border-[#7D4DFF] p-[8px]">
                    <Image src={exchange.image} alt={exchange.name} width={60} height={60} />
                  </div>

                  {/* Exchange Name & Button */}
                  <div className="flex flex-col items-center justify-center gap-[0.6rem]">
                    <h2 className="text-[24px] font-[600] text-white">{exchange.name}</h2>
                  </div>
                </div>

                {/* Exchange Features Table */}
                <motion.div
                    key={exchange.id}
                    className="flex flex-col border border-white/10 rounded-[14px] p-[8px] text-center w-full max-w-[360px] h-full "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ padding: "0px" }}
                >
                    <div className="flex flex-col exchange-card-style rounded-[14px] h-full p-[2rem] space-y-[1.4rem]">
                    <div className="flex flex-row w-full gap-4 items-center justify-between h-full">
                        <div className="flex flex-col gap-2">
                        <h3 className="text-transparent select-none">Placeholder</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                        <h3 className="text-white/80 text-[16px] font-[500]">Spot</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                        <h3 className="text-white/80 text-[16px] font-[500]">Features</h3>
                        </div>
                    </div>

                    {/* Data Rows */}
                    <div className="flex flex-row w-full items-between justify-between h-full">
                        {/* Features */}
                        <div className="flex flex-col gap-2 items-center justify-between w-[24%] h-full">
                        {exchange.features.map((feature, index) => (
                            <span key={index} className="text-[#9e9e9e]">
                            {feature.replace(/_/g, " ")}
                            </span>
                        ))}
                        </div>

                        {/* Spot Information */}
                        <div className="flex fle flex-col gap-2 items-center justify-between h-[10rem]">
                        {exchange.spot.map((spot, index) => (
                            <span key={index} className="text-[#9e9e9e]">{spot}</span>
                        ))}
                        </div>

                        {/* Features Display */}
                        <div className="flex flex-col gap-2 items-center justify-between h-[10rem]">
                        {exchange.features_display.map((display, index) => (
                            <span key={index} className="text-[#9e9e9e]">{display}</span>
                        ))}
                        </div>
                    </div>
                  </div>

                  </motion.div>
              </div>
            ) : (
              <p className="text-white text-lg">Exchange not found.</p>
            )}

            <IntegrationList data={integrationListData} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
