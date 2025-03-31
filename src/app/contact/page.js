import ContactMain from "@/components/contactComponents/ContactMain";
import ContactCardSection from "@/components/contactComponents/ContactCardSection";

import { generateMetadata } from "@/components/SEO/Metadata";

import "../../styles/contact.css"; 

export const metadata = generateMetadata({
  title: "Contact",
  path: "/contact",
  description: "Reach the TradeChainly team via email at support@tradechainly.com or through our social media channels. Business hours: 9am-5pm EST, Monday-Friday.",
  keywords: [
    "TradeChainly contact",
    "crypto trading support",
    "trade journal help",
    "exchange integration support",
    "contact TradeChainly team",
    "trading analytics questions",
    "technical support crypto",
    "feedback for TradeChainly"
  ],
  ogTitle: "TradeChainly • Contact & Support",
  ogDescription: "Get in touch with our team for support, questions, or feedback about our crypto trading journal platform",
});

export default function Contact() {
  return (
    <div className="home mt-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
          <ContactMain />
        </div>
        <div className="w-full">
          <ContactCardSection />
        </div>
      </div>
    </div>
  );
} 