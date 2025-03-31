import NotFound from "@/components/notFound/notFound"; // Import your NotFound component
import { generateMetadata } from "@/components/SEO/Metadata";

export const metadata = generateMetadata({
  title: "Page Not Found",
  path: "/404",
  description: "The page you're looking for doesn't exist. Return to TradeChainly's homepage or try searching for what you need.",
  keywords: [
    "404 error",
    "page not found",
    "TradeChainly error",
    "broken link",
    "missing page",
    "crypto tools",
    "trading journal",
    "return to homepage"
  ],
  ogTitle: "TradeChainly • Page Not Found",
  ogDescription: "We couldn't find the page you requested. Browse our crypto trading tools instead.",
  noIndex: true,
  noFollow: true
});

export default function NotFoundPage() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1 px-[14px]">
      <div className="absolute w-full h-[130vh] gradient-bg top-0 z-[-1]">
        {/* Optional: Add any background or gradient here */}
      </div>
      <div className="home-cont w-full h-full flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full">
          <NotFound /> {/* Render your NotFound component here */}
        </div>
      </div>
    </div>
  );
}
