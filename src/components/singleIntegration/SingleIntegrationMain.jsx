"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../styles/exchangeCards.css";

import FancyTitle from "@/components/homeComponents/FancyTitle";
import GetStartedButton from "../buttons/GetStartedButton";
import IntegrationList from "@/components/singleIntegration/IntegrationList";

export default function SingleIntegrationMain({ 
  initialExchange, 
  initialIntegrationListData 
}) {
  const router = useRouter();
  const [exchange, setExchange] = useState(initialExchange);
  const [integrationListData, setIntegrationListData] = useState(initialIntegrationListData);
  const [loading, setLoading] = useState(false);

  // Handle loading and redirect if exchange not found
  useEffect(() => {
    if (!exchange) {
      setLoading(true);
      const timer = setTimeout(() => {
        router.replace("/404");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [exchange, router]);

  if (!exchange) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full singleIntegration-container overflow-visible md:p-[0px] px-[14px] md:px-[28px]">
      <div className="singleIntegration-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <motion.div
          className="singleIntegration-content flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: "1.5rem" }}
          animate={{ opacity: 1, y: "0rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-[1rem] items-center justify-center w-full">
            <div className="max-w-[1200px] w-full">
              <FancyTitle title="Integration" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: "1.5rem" }}
              animate={{ opacity: 1, y: "0rem" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="title-content flex flex-col items-center max-w-[1050px] gap-[22px]"
            >
              <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
                Integrating With {exchange.name}
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: "1.5rem" }} 
              animate={{ opacity: 1, y: "0rem" }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="btns-second md:w-fit w-full mt-[0.6rem]"
            >
                <GetStartedButton href="https://app.tradechainly.website/" text="Get Started" width="100%" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: "1.5rem" }}
            animate={{ opacity: 1, y: "0rem" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="singleIntegration-main md:pt-[100px] pt-[50px] w-screen h-full flex flex-col items-center justify-center overflow-visible gap-[50px] max-w-[1200px]"
          >
            {/* Exchange Details Section */}
            <div className="tab flex flex-col w-fit h-full md:p-[2rem] pt-[0px] rounded-lg">
              <div className="flex items-center justify-center p-[1.3rem] gap-[2.2rem]">
                {/* Exchange Logo */}
                <div className="w-[76px] h-[76px] flex-shrink-0 border-2 rounded-[8px] border-[#7D4DFF] p-[8px]">
                  <Image 
                    src={exchange.image} 
                    alt={exchange.name} 
                    width={76} 
                    height={76} 
                  />
                </div>

                {/* Exchange Name & Button */}
                <div className="flex flex-col items-center justify-center gap-[0.6rem]">
                  <h2 className="text-[24px] font-[600] text-white">{exchange.name}</h2>
                </div>
              </div>

              {/* Exchange Features Table */}
              <motion.div
                key={exchange.id}
                className="flex flex-col border border-white/10 rounded-[14px] p-[8px] text-center w-full max-w-[360px] h-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ padding: "0px" }}
              >
                <div className="flex flex-col exchange-card-style rounded-[14px] h-full p-[2rem] space-y-[1.4rem]">
                  <div className="flex flex-row w-full gap-4 items-center justify-between h-full">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-transparent select-none">Placeholder</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-[16px] font-[500]">Spot</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-[16px] font-[500]">Features</h3>
                    </div>
                  </div>

                  {/* Data Rows */}
                  <div className="flex flex-row w-full items-between justify-between h-full">
                    {/* Features */}
                    <div className="flex flex-col gap-2 items-center justify-between w-[24%] h-full">
                      {exchange.features.map((feature, index) => (
                        <span key={index} className="text-white">
                          {feature.replace(/_/g, " ")}
                        </span>
                      ))}
                    </div>

                    {/* Spot Information */}
                    <div className="flex flex-col gap-2 items-center justify-around h-[10rem]">
                      {exchange.spot.map((spot, index) => (
                        <span key={index} className="text-[#9ca3af]">{spot}</span>
                      ))}
                    </div>

                    {/* Features Display */}
                    <div className="flex flex-col gap-2 items-center justify-around h-[10rem]">
                      {exchange.features_display.map((display, index) => (
                        <span key={index} className="text-[#9ca3af]">{display}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <IntegrationList 
              data={integrationListData} 
              selectedExchange={exchange.name.toLowerCase()} 
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}