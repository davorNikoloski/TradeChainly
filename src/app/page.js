import Hero from "@/components/homeComponents/Hero";
import Features from "@/components/homeComponents/Features";

import "../styles/home.css"; 

export default function Home() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto gradient-bg flex items-center justify-center overflow-visible relative">
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-center">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <Features />
        </div>
      </div>
    </div>
  );
} 