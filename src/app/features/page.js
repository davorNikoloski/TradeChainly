import FeaturesMain from "@/components/featuresComponents/FeaturesMain";
import FeaturesCards from "@/components/featuresComponents/FeaturesCards";
import Analytics from "@/components/featuresComponents/Analytics";
import Automation from "@/components/featuresComponents/Automation";
import Analysis from "@/components/featuresComponents/Analysis";
import Reporting from "@/components/featuresComponents/Reporting";
import Forecast from "@/components/featuresComponents/Forecast";

import "../../styles/features.css"; 

export default function Features() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full h-[130vh] gradient-bg top-0 z-[-1]">

      </div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full  ">
          <FeaturesMain />
        </div>
        <div className="w-full">
          <FeaturesCards />
        </div>
        <div className="w-full h-full pt-[100px]">
          <Analytics />
        </div>
        <div className="w-full h-full pt-[100px]">
          <Automation />
        </div>
        <div className="w-full h-full pt-[100px]">
          <Analysis />
        </div>
        <div className="w-full h-full pt-[100px]">
          <Reporting />
        </div>
        <div className="w-full h-full pt-[100px]">
          <Forecast />
        </div>
      </div>
    </div>
  );
} 