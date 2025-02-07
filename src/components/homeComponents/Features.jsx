import "../../styles/hero.css"; 
import FirstButtonComponent from "@/components/homeComponents/FirstButtonComponent";
import GlowingBoxComponent from "@/components/GlowingBoxComponent";
import FancyTitle from "@/components/homeComponents/FancyTitle";

import GetStartedButton from '../buttons/GetStartedButton';
import Image from "next/image";

export default function Features() {
  return (
<div className="w-full h-full features-container overflow-visible md:p-[0px] px-[14px]">
    <div className="features-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        <div className="features-title w-full flex items-center justify-center flex-col gap-[12px]">
            <FancyTitle />
            <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
                Powerful Features
            </h1>
            <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[50%]">
                You focus on trading while we do the heavy lifting for you. With cutting-edge features, we help you trade smarter and stay ahead of the market.
            </p>
        </div>
        <div className="">

        </div>
    </div>
</div>
  );
}
