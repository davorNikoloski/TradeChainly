import Hero from "@/components/homeComponents/Hero";
import Features from "@/components/homeComponents/Features";
import Integrations from "@/components/homeComponents/Integrations";
import Benefits from "@/components/homeComponents/Benefits";
import Community from "@/components/homeComponents/Community";
import { generateMetadata } from "@/components/SEO/Metadata";

import "../styles/home.css"; 

export const metadata = generateMetadata({
  title: "Home",
  path: "/", // Root path for home page
  description: "Automate your crypto trading journal with TradeChainly. Gain key insights, track performance, and improve your strategy with our AI-powered analytics and automated trade tracking system. Perfect for serious crypto traders.",
  keywords: [
      "crypto trading journal",
      "automated trade tracking",
      "trading analytics",
      "crypto performance analysis",
      "AI trading insights",
      "trade automation",
      "crypto trade journal",
      "trading strategy optimizer"
  ],
  ogTitle: "TradeChainly • Automated Crypto Trading Journal",
  ogDescription: "Transform your trading with automated journaling and AI-powered analytics",

});

export default function Home() {
  return (
    <div className="home mt-[2rem] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-hidden relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px]  flex flex-col max-w-[1200px] items-center justify-center">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full md:pt-[50px]">
          <Features />
        </div>
        <div className="w-full md:pt-[100px] pt-[50px]">
          <Integrations />
        </div>
        <div className="w-full md:pt-[100px] pt-[50px]">
          <Benefits />
        </div>
        <div className="w-full md:pt-[100px] pt-[50px]">
          <Community />
        </div>
      </div>
    </div>
  );
}