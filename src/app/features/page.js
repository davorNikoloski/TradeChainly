import FeaturesMain from "@/components/featuresComponents/FeaturesMain";
import FeaturesCards from "@/components/featuresComponents/FeaturesCards";
import Analytics from "@/components/featuresComponents/Analytics";
import Automation from "@/components/featuresComponents/Automation";
import Analysis from "@/components/featuresComponents/Analysis";
import Reporting from "@/components/featuresComponents/Reporting";
import Forecast from "@/components/featuresComponents/Forecast";
import { generateMetadata } from "@/components/SEO/Metadata";

import "../../styles/features.css"; 

export const metadata = generateMetadata({
  title: "Features",
  path: "/features",
  description: "Discover TradeChainly's powerful trading tools: automated journaling, AI-driven analytics, performance tracking, and market forecasting to transform your crypto trading strategy.",
  keywords: [
    "crypto trading features",
    "automated trade journal",
    "trading analytics tools",
    "crypto performance tracking",
    "AI trading forecasts",
    "risk management tools",
    "trade automation software",
    "crypto trading insights"
  ],
  ogTitle: "TradeChainly • Advanced Trading Features & Analytics",
  ogDescription: "Boost your trading performance with automated journaling, real-time analytics, and AI-powered forecasting tools",
});

export default async function Features() {
  const featuresCardsData = (await import("../../data/featuresCardsData.json")).default;
  const analyticsCardData = (await import("../../data/analyticsCardData.json")).default;
  const automationCardData = (await import("../../data/automationCardData.json")).default;
  const analysisCardData = (await import("../../data/analysisCardData.json")).default;
  const reportingCardData = (await import("../../data/reportingCardData.json")).default;
  const forecastCardData = (await import("../../data/forecastCardData.json")).default;

  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>

      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
          <FeaturesMain />
        </div>
        <div className="w-full">
          <FeaturesCards data={featuresCardsData} />
        </div>
        <div className="w-full h-full md:pt-[100px] pt-[80px]">
          <Analytics data={analyticsCardData} />
        </div>
        <div className="w-full h-full md:pt-[100px] pt-[80px]">
          <Automation data={automationCardData} />
        </div>
        <div className="w-full h-full md:pt-[100px] pt-[80px]">
          <Analysis data={analysisCardData} />
        </div>
        <div className="w-full h-full md:pt-[100px] pt-[80px]">
          <Reporting data={reportingCardData} />
        </div>
        <div className="w-full h-full md:pt-[100px] pt-[80px]">
          <Forecast data={forecastCardData} />
        </div>
      </div>
    </div>
  );
}
