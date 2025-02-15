import "../../styles/hero.css"; 
import FancyTitle from "@/components/homeComponents/FancyTitle";
import FeatruesSections from "@/components/homeComponents/FeatruesSections";
import featuresData from "../../data/featuresData.json";
import CircleWithLogos from "@/components/homeComponents/CircleWithLogos";

export default function Integrations() {
  return (
    <div className="w-full h-full integrations-container overflow-visible md:p-[0px] px-[14px] md:pt-[28px]">
      <div className="integrations-sub flex flex-col gap-[1rem] h-full justify-between items-center">
        {/* Header Section */}
        <div className="integrations-title w-full flex items-center justify-center flex-col gap-[12px]">
          <FancyTitle title="Integration" />
          <h1 className="md:text-[47px] text-[28px] font-[600] leading-[1.2] text-transparent bg-gradient-to-l from-white/35 via-white to-white/90 bg-clip-text m-0">
            Seamless Exchange Integration
          </h1>
          <p className="text-[16px] font-normal leading-[1.4] text-gray-400 mt-0 mb-[10px] text-center md:w-[50%]">
            Connect effortlessly with the leading crypto exchanges to sync your trades, journal your activity, and stay organized—all in one place.
          </p>
          <a href="" className="text-[16px] font-normal leading-[1.4] text-center flex items-center justify-center">
            See All &gt;
          </a>
        </div>

        {/* Features Sections (Dynamically Rendered) */}
        <div className="integrations-main pt-[40px] w-full h-full flex flex-col gap-[60px]">
        <CircleWithLogos/>
        </div>
      </div>
    </div>
  );
}
