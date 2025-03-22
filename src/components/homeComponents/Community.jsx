"use client";

import "../../styles/hero.css";
import FancyTitle from "@/components/homeComponents/FancyTitle";
import CommunityItems from "@/components/homeComponents/homeHelper/CommunityItems";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <div className="w-full h-full community-container overflow-visible md:p-[0px] px-[14px] md:pt-[28px]">
      <div className="integrations-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        
        {/* Header Section */}
        <motion.div 
          className="community-title w-full flex items-center justify-center flex-col gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-[700px] w-full">
            <FancyTitle title="Community" />
          </div>

          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Collaborate, Learn, Improve
          </h1>
          <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[50%]">
            Join a vibrant community where traders collaborate, learn, and grow together.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="community-main pt-[40px] w-full h-full flex flex-col gap-[60px] items-center px-[4rem]">
          {/* Image with motion */}
          <motion.div 
            initial={{ opacity: 0, x: "5rem" }}  // Starts 3rem to the right
            whileInView={{ opacity: 1, x: "0rem" }}  // Moves to original position
            transition={{ duration: 0.75, ease: "easeOut" }}  // Smooth 0.3s transition
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/Landing Page/Community Section/Landing_Page_ConnectionBull.png"
              alt="Community Collaboration"
              width={1200}
              height={1200}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Community Features */}
          <CommunityItems />
        </div>
      </div>
    </div>
  );
}
