"use client";
import FeaturesLeftSection from "./homeHelper/FeaturesLeftSection";
import RightBox from "@/components/homeComponents/homeHelper/RightBox";

export default function FeatruesSections({ title, description, features, image, index }) {
  const isEven = index % 2 === 0; // Check if the index is even

  return (
    <div className="main-features-section md:p-[2rem] p-[14px] px-[] pt-[0px] max-w-[1200px] md:max-h-[676px]">
      <div className={`features-section-cont w-full h-full flex flex-col md:flex-row gap-[50px] items-center justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
        
        {/* Left Section (Swaps Based on Index) */}
        <div className="left">
          <FeaturesLeftSection title={title} description={description} features={features} />
        </div>

        {/* Right Section (Swaps Based on Index) */}
        <div className="right w-full">
          <RightBox
            width="547px"
            image={{
              src: image, // Dynamically use the image from JSON
              alt: title,
              width: 1200,
              height: 1200,
              className: "custom-image-class",
            }}
            isEven={isEven} // Pass isEven to RightBox
          />
        </div>

      </div>
    </div>
  );
}
