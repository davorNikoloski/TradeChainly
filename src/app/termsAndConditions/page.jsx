import TermsAndConditionsMain from "@/components/misc/TermsAndConditionsMain";
import termsAndConditionsData from "../../data/termsAndConditionsData.json";
import "../../styles/contact.css"; 

export default function TermsAndConditions() {
  return (
    <div className="terms&conditions m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full h-[130vh] gradient-bg top-0 z-[-1]">

      </div>
      <div className="terms&conditions-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full  md:pt-[3rem]">
          <TermsAndConditionsMain data={termsAndConditionsData} />
        </div>
      </div>
    </div>
  );
} 