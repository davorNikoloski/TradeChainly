"use client";
import ExchangeCardsDetails from "@/components/exchangeSupport/ExchangeCardsDetails";
import "../../styles/benefitsCard.css";

export default function ExchangeCards({ data }) {
  return (
    <div className="w-full h-full benefits-container overflow-visible md:p-[0px] px-[14px] md:pt-[28px]">
      <div className="integrations-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Exchange Cards Section (Dynamically Rendered) */}
        <div className="benefits-main pt-[40px] flex flex-wrap justify-center gap-6">
          <ExchangeCardsDetails data={data} />
        </div>
      </div>
    </div>
  );
}
