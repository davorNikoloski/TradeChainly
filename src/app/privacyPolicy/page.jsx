import PrivacyPolicyMain from "@/components/misc/PrivacyPolicyMain";

import "../../styles/contact.css"; 
import privacyPolicyData from "../../data/privacyPolicyData.json";

import { generateMetadata } from "@/components/SEO/Metadata";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  path: "/privacyPolicy",
  description: "TradeChainly's Privacy Policy outlines how we collect, use, and protect your personal data when using our crypto trading journal platform. Learn about your data rights and security measures.",
  keywords: [
    "TradeChainly privacy policy",
    "data protection crypto tools",
    "trading journal privacy",
    "GDPR compliance",
    "personal data security",
    "information collection policy",
    "user data rights",
    "crypto analytics privacy"
  ],
  ogTitle: "TradeChainly • Privacy Policy",
  ogDescription: "How TradeChainly collects, uses, and protects your personal data in our crypto trading journal platform",
  noIndex: true // Recommended for legal pages
});

export default function PrivacyPolicy() {
  return (
    <div className="privacyPolicy m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="privacyPolicy-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
        <PrivacyPolicyMain data={privacyPolicyData} />
        </div>
      </div>
    </div>
  );
} 