import { Geist, Geist_Mono, Mulish, Inter } from "next/font/google";
import "../styles/globals.css";
import fs from "fs";
import path from "path";
import { headers } from "next/headers";

// COMPONENTS
import ConditionalComponents from "@/components/ConditionalComponents";

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
  description: "Automated Crypto Trading Journal & Analytics Platform",
  icons: {
    icon: "/images/App Logo/favicon-32x32.png", // Path to your favicon
  },
};


async function getFaqData() {
  const filePath = path.join(process.cwd(), "src/data/faqContent.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const faqData = JSON.parse(jsonData).faqs;
  return faqData;
}

export default async function RootLayout({ children }) {
  const faqData = await getFaqData();
  const headersList = headers();
  const pathname = headersList.get("x-next-pathname") || "";

  return (
    <html lang="en" className={`${mulish.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#010012] overflow-x-hidden">
        <main className="flex-1">{children}</main>

        {/* Conditional rendering for Navbar, Footer, FAQ, and CTA */}
        <ConditionalComponents faqData={faqData} />
      </body>
    </html>
  );
}
