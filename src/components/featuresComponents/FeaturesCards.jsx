"use client";
import BenefitsCards from "@/components/homeComponents/homeHelper/BenefitsCards";
import "../../styles/benefitsCard.css";
import featuresCardsData from "../../data/featuresCardsData.json";

  
export default function Benefits() {
  return (
    <div className="w-full h-full benefits-container overflow-visible md:p-[0px] px-[14px] md:pt-[28px] ">
      <div className="integrations-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Features Sections (Dynamically Rendered) */}
        <div className="benefits-main pt-[40px] w-full h-full flex flex-col gap-[60px] gradient-bg-benefits">
            <BenefitsCards data={featuresCardsData} />
        </div>
      </div>
    </div>
  );
}
