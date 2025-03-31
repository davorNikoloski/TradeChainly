import SingleIntegrationMain from "@/components/singleIntegration/SingleIntegrationMain";
import { generateMetadata as generateSeoMetadata } from "@/components/SEO/Metadata";
import exchangeCardsData from "../../../data/exchangeCards.json";
import "../../../styles/features.css";

export async function generateMetadata({ params }) {
  const exchangeName = params.id;
  const exchange = exchangeCardsData.find(
    (ex) => ex.name.toLowerCase() === exchangeName.toLowerCase()
  );

  if (!exchange) {
    return generateSeoMetadata({
      title: "Exchange Not Found",
      description: "The requested exchange integration was not found",
      noIndex: true
    });
  }

  return generateSeoMetadata({
    title: exchange.name,
    path: `/singleIntegration/${exchangeName.toLowerCase()}`,
    description: `Learn how to connect your ${exchange.name} account with TradeChainly for automated trade journaling, analytics, and performance tracking. Step-by-step integration guide.`,
    keywords: [
      `${exchange.name} trade journal`,
      `connect ${exchange.name} to TradeChainly`,
      `${exchange.name} API integration`,
      `${exchange.name} trading analytics`,
      `automate ${exchange.name} trades`,
      `${exchange.name} performance tracking`,
      `${exchange.name} crypto tools`,
      `TradeChainly ${exchange.name} setup`
    ],
    ogTitle: `TradeChainly • ${exchange.name} Integration`,
    ogDescription: `Step-by-step guide to connect your ${exchange.name} account with TradeChainly for automated trade tracking and analytics`,
    ogImage: exchange.image
  });
}

export default function SingleIntegration() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full h-auto">
          <SingleIntegrationMain />
        </div>
      </div>
    </div>
  );
}