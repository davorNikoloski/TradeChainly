import SingleIntegrationMain from "@/components/singleIntegration/SingleIntegrationMain";
import { generateMetadata as generateSeoMetadata } from "@/components/SEO/Metadata";
import "../../../styles/features.css";

export async function generateMetadata({ params }) {
  const { default: exchangeCardsData } = await import("../../../data/exchangeCards.json");
  
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

  const dynamicMetadata = {
    title: `${exchange.name} Integration`,
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
  };

  return generateSeoMetadata(dynamicMetadata);
}

export async function generateStaticParams() {
  const { default: exchangeCardsData } = await import("../../../data/exchangeCards.json");
  
  return exchangeCardsData.map((exchange) => ({
    id: exchange.name.toLowerCase(),
  }));
}

export default async function SingleIntegration({ params }) {
  // Pre-fetch all data at build time
  const [exchangeCardsData, integrationListData] = await Promise.all([
    import("../../../data/exchangeCards.json").then(mod => mod.default),
    import("../../../data/integrationListData.json").then(mod => mod.default)
  ]);

  const exchangeName = params.id;
  const exchange = exchangeCardsData.find(
    (ex) => ex.name.toLowerCase() === exchangeName.toLowerCase()
  );

  if (!exchange) {
    return <div>Exchange not found</div>;
  }

  return (
    <div className="home mt-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full h-auto">
          <SingleIntegrationMain 
            initialExchange={exchange}
            initialIntegrationListData={integrationListData}
          />
        </div>
      </div>
    </div>
  );
}