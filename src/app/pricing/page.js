import PricingMain from "@/components/pricingComponents/PricingMain";

import { generateMetadata } from "@/components/SEO/Metadata";

import "../../styles/features.css"; 

export const metadata = generateMetadata({
  title: "Pricing",
  path: "/pricing",
  description: "TradeChainly's All-in-One Plan: Get unlimited trades, automated journaling, advanced analytics & AI forecasts for just $16/month (annual billing). Start optimizing your trading today.",
  keywords: [
    "crypto trading journal pricing",
    "trade analytics software cost",
    "automated trading journal plans",
    "AI trading tools subscription",
    "best value trading analytics",
    "affordable trade tracking",
    "crypto journal features pricing",
    "TradeChainly subscription plans"
  ],
  ogTitle: "TradeChainly • Pricing Plans for Serious Traders",
  ogDescription: "Advanced trading tools starting at $16/month. Unlimited trades, automated journaling, AI forecasts & comprehensive analytics included.",
});

export default function Pricing() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full h-auto ">
          <PricingMain />
        </div>
      </div>
    </div>
  );
} 