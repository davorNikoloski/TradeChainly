"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import FaqServer from "@/components/FaqServer";
import Cta from "@/components/Cta";

export default function ConditionalComponents({ faqData }) {
  const pathname = usePathname(); // Get the current URL path

  // Hide components on specific pages
  const shouldHideComponents =
    pathname === "/termsAndConditions" || pathname === "/privacyPolicy";

  if (shouldHideComponents) return null; // Don't render the components on these pages

  return (
    <>
      <div className="pt-[100px]">
        <FaqServer faqData={faqData} /> {/* Pass the FAQ data as a prop */}
      </div>
      <div className="pt-[100px]">
        <Cta /> {/* Render Call to Action */}
      </div>
    </>
  );
}
