// src/app/layout.js
import { Geist, Geist_Mono, Mulish, Inter  } from "next/font/google";

import "../styles/globals.css";

//COMPONENTS
import Navbar from "@/components/Navbar";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "TradeChainly",
  description: "TradeChainly bla bla bla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${inter.variable}`}>
      <body>
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
