import ExchangeSupportMain from "@/components/exchangeSupport/ExchangeSupportMain";

import { generateMetadata } from "@/components/SEO/Metadata";

import "../../styles/features.css"; 

export const metadata = generateMetadata({
  title: "Exchange Support",
  path: "/exchangeSupport",
  description: "TradeChainly seamlessly integrates with Binance, Bybit, Coinbase, and other top crypto exchanges. Auto-sync your trades or upload files for comprehensive analysis.",
  keywords: [
    "Binance trade journal",
    "Bybit trading analytics",
    "Coinbase performance tracking",
    "crypto exchange integration",
    "automated trade sync",
    "supported trading platforms",
    "multi-exchange portfolio tracking",
    "TradeChainly supported exchanges"
  ],
  ogTitle: "TradeChainly • Supported Crypto Exchanges",
  ogDescription: "Connect your Binance, Bybit, Coinbase & other exchange accounts for automated trade tracking and analytics",
});

export default function exchangeSupport() {
  return (
    <div className="home m-[2rem] pb-[0px] mx-auto w-full h-auto bg-opacity-0 flex items-center justify-center overflow-visible relative z-1">
      <div className="absolute w-full min-h-[130vh] h-auto gradient-bg top-0 z-[-1]"></div>
      <div className="home-cont w-full h-full pt-[100px] flex flex-col max-w-[1200px] items-center justify-start">
        <div className="w-full h-auto">
          <ExchangeSupportMain />
        </div>
      </div>
    </div>
  );
} 