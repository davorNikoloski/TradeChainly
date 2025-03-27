import { Geist, Geist_Mono, Mulish, Inter } from "next/font/google";
import "../styles/globals.css";
import fs from "fs";
import path from "path";

// COMPONENTS
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConditionalComponents from "@/components/ConditionalComponents"; // Import the ConditionalComponents component

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "TradeChainly",
  description: "TradeChainly bla bla bla",
};

// Fetching FAQ data at build time
async function getFaqData() {
  const filePath = path.join(process.cwd(), "src/data/faqContent.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const faqData = JSON.parse(jsonData).faqs;
  return faqData;
}

export default async function RootLayout({ children }) {
  // Fetch the FAQ data once during build time
  const faqData = await getFaqData();

  return (
    <html lang="en" className={`${mulish.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#010012] overflow-x-hidden">
        {/* Navbar */}
        <div className="fixed w-full flex justify-center h-[69.4px] md:h-[63.6px] bg-opacity-40 backdrop-blur-lg z-[999]">
          <Navbar />
        </div>

        <main className="flex-1">{children}</main>

        {/* Conditional rendering for FAQ and CTA */}
        <div>
          <ConditionalComponents faqData={faqData} /> {/* Pass the FAQ data here */}
        </div>

        {/* Footer */}
        <div className="pt-[100px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
