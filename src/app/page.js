import Hero from "@/components/homeComponents/Hero";
import Features from "@/components/homeComponents/Features";
import Integrations from "@/components/homeComponents/Integrations";
import Benefits from "@/components/homeComponents/Benefits";
import Community from "@/components/homeComponents/Community";

import "../styles/home.css"; 

export default function Home() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full h-[10%] gradient-bg top-0 z-[-1]">

      </div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-center">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full pb-[100px] ">
          <Features />
        </div>
        <div className="w-full pt-[28px]">
          <Integrations />
        </div>
        <div className="w-full pt-[128px]">
          <Benefits />
        </div>
        <div className="w-full pt-[128px]">
          <Community />
        </div>
      </div>
    </div>
  );
} 