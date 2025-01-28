// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

//COMPONENTS
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TradeChainly",
  description: "TradeChainly bla bla bla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
