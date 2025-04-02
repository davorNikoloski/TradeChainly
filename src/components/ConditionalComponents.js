"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import FaqServer from "@/components/FaqServer";
import Cta from "@/components/Cta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalComponents({ faqData }) {
  const pathname = usePathname(); // Get the current URL path

  // Define visibility rules
  const hideEverything = pathname === "/404";
  const hideFaqAndCtaOnly = pathname === "/termsAndConditions" || pathname === "/privacyPolicy";

  if (hideEverything) return null; // Hide all components on the 404 page

  return (
    <>
      {/* Navbar - Always visible except on 404 */}
      <div className="fixed w-full flex justify-center h-[69.4px] md:h-[63.6px] bg-opacity-40 backdrop-blur-lg z-[999]">
        <Navbar />
      </div>

      {!hideFaqAndCtaOnly && (
        <>
          {/* FAQ Section */}
          <div className="md:pt-[100px] pt-[50px]">
            <FaqServer faqData={faqData} />
          </div>

          {/* Call to Action */}
          <div className="md:pt-[100px] pt-[50px]">
            <Cta />
          </div>
        </>
      )}

      {/* Footer - Always visible except on 404 */}
      <div className="md:pt-[100px] pt-[80px]">
        <Footer />
      </div>
    </>
  );
}
