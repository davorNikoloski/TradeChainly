"use client";
import FeaturesLeftSection from "./homeHelper/FeaturesLeftSection";
import RightBox from "@/components/homeComponents/homeHelper/RightBox";

export default function FeatruesSections({ title, description, features, index }) {
  const isEven = index % 2 === 0; // Check if the index is even

  return (
    <div className="main-features-section md:p-[2rem] p-[14px] pt-[0px] max-w-[1200px] max-h-[676px]">
      <div className={`features-section-cont w-full h-full flex flex-col md:flex-row gap-[50px] items-center justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
        
        {/* Left Section (Swaps Based on Index) */}
        <div className="left">
          <FeaturesLeftSection title={title} description={description} features={features} />
        </div>

        {/* Right Section (Swaps Based on Index) */}
        <div className="right">
          <RightBox
            width="547px"
            image={{
              src: `/images/Landing Page/Features Section/${index + 1}.png`, // Assuming different images for each section
              alt: "App Logo",
              width: 1200,
              height: 1200,
              className: "custom-image-class",
            }}
          />
        </div>

      </div>
    </div>
  );
}
