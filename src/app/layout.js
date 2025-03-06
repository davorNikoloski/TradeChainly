// src/app/layout.js
import { Geist, Geist_Mono, Mulish, Inter  } from "next/font/google";

import "../styles/globals.css";

//COMPONENTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import FaqServer from "@/components/FaqServer";
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap", // Ensure no mismatch occurs
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Fix potential mismatch
});


export const metadata = {
  title: "TradeChainly",
  description: "TradeChainly bla bla bla",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#010012] overflow-x-hidden">
        <div className="fixed w-full flex justify-center h-[69.4px] md:h-[63.6px] bg-opacity-40 backdrop-blur-lg z-[999]">
          <Navbar /> {/* Always at the top */}
        </div>
        <main className="flex-1">{children}</main> 
        <div className="pt-[60px]">
          <FaqServer /> 
        </div>
        <div className="pt-[100px] pb-[28px]">
          <Cta /> 
        </div>
        <div className="pt-[28px]">
          <Footer /> 
        </div>
      </body>
    </html>
  );
}
