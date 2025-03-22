import PrivacyPolicyMain from "@/components/misc/PrivacyPolicyMain";

import "../../styles/contact.css"; 
import privacyPolicyData from "../../data/privacyPolicyData.json";

export default function PrivacyPolicy() {
  return (
    <div className="privacyPolicy m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full h-[130vh] gradient-bg top-0 z-[-1]">

      </div>
      <div className="privacyPolicy-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
        <PrivacyPolicyMain data={privacyPolicyData} />
        </div>
      </div>
    </div>
  );
} 