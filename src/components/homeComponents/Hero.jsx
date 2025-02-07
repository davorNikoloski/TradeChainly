import "../../styles/hero.css"; 
import FirstButtonComponent from "@/components/homeComponents/FirstButtonComponent";
import GlowingBoxComponent from "@/components/GlowingBoxComponent";

import GetStartedButton from '../buttons/GetStartedButton';
import Image from "next/image";

export default function Hero() {
  return (
<div className="w-full h-full hero-container overflow-visible md:p-[0px] px-[14px]">
  <div className="hero-sub flex flex-col gap-[1rem] h-full justify-between items-center">
    <div className="hero-content flex flex-col gap-[1rem] items-center justify-center">
        <div className="btns-first w-full md:w-auto">
            <FirstButtonComponent />
        </div>
        <div className="title-content flex flex-col items-center md:w-[75%] gap-[22px] ">
            <h1 className="font-[500] md:text-[65px] text-[35px] md:text-center text-start font-mulish text-white md:leading-[5rem] leading-10">
              All-in-Pne Crypto Journal to Find Your Trading Edge
            </h1>
            <p className="text-[#9e9e9e] font-[400] text-[18px] md:w-[70%] md:text-center text-start">
              Unlock your potential with powerful journaling tools and insights to make smarter, data-driven trading decisions.
            </p>
        </div>
        <div className="btns-second md:w-fit w-full">
        <GetStartedButton href="/XXX" text="Get Started" width="100%" />
        </div>
    </div>

    <div className="hero-image flex items-center">
      <Image
        src="/images/Landing Page/Hero Section/Landing_Page_Bull.svg"
        alt="App Logo"
        width={50}
        height={40}
        className="w-[30rem]"
      />
    </div>
        <div className="image flex items-center justify-center relative top-[-8.5rem] w-full">
        <GlowingBoxComponent  
          image={{
            src: "/images/Landing Page/Features Section/1.png",
            alt: "App Logo",
            width: 1200, // Required, but not limiting
            height: 1200, // Required, but not limiting
            className: "custom-image-class",
          }}
        />
          {
            /**
             HERE ADD THE IMAGE INSIDE GlowingBoxComponent AS A PROP AND FROM THERE MOVE IT 
              */
          }
        </div>
      </div>
    </div>
  );
}
