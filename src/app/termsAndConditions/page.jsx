import TermsAndConditionsMain from "@/components/misc/TermsAndConditionsMain";
import termsAndConditionsData from "../../data/termsAndConditionsData.json";
import { generateMetadata } from "@/components/SEO/Metadata";


import "../../styles/contact.css"; 

export const metadata = generateMetadata({
  title: "Terms & Conditions",
  path: "/termsAndConditions",
  description: "TradeChainly's Terms of Service outline user responsibilities, service descriptions, and legal policies for using our crypto trading journal platform.",
  keywords: [
    "TradeChainly terms",
    "crypto journal terms of service",
    "trading platform conditions",
    "user agreement",
    "legal terms crypto tools",
    "trade analytics policies",
    "terms of use",
    "service conditions"
  ],
  ogTitle: "TradeChainly • Terms & Conditions",
  ogDescription: "Legal terms and conditions for using TradeChainly's automated crypto trading journal and analytics platform",
  noIndex: true // Recommended for legal pages
});

export default function TermsAndConditions() {
  return (
    <div className="terms&conditions m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="terms&conditions-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full ">
          <TermsAndConditionsMain data={termsAndConditionsData} />
        </div>
      </div>
    </div>
  );
} 