import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="max-w-[1200px] mx-auto p-[28px] pb-[56px] text-white relative">
      <div className="footer-wrapper flex flex-col md:flex-row md:gap-8 gap-[70px] items-center justify-between">
        {/* Brand Section */}
        <div className="flex flex-col items-start md:max-w-[40%] gap-[18px]">
          <Link href="/" className="w-inline-block">
            <Image
              src="/images/App Logo/HQTransparent_Logo_Hr_001.png"
              alt="App Logo"
              width={150}
              height={150}
              className="footer-brand-image w-[70%]"
            />
          </Link>
          <p className="text-[16px] mt-2 text-gray-400">
            Tools for futures, currency & options involves substantial risk & is not appropriate for everyone. Only risk capital
            should be used for trading. Testimonials appearing on this website may not be representative of other clients or customers
            and is not a guarantee of future performance or success.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex items-start gap-[70px] text-[16px]">
          {/* Main Pages */}
          <div>
            <div className="flex flex-col mt-2 gap-[12px]">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-500">Features</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-500">Pricing</Link>
              <Link href="/features" className="text-gray-400 hover:text-white transition-colors duration-500">Exchange Support</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-500">Contact Us</Link>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex flex-col mt-2 gap-[12px]">
              <Link href="term-and-conditions" className="text-gray-400 hover:text-white transition-colors duration-500">Terms & Conditions</Link>
              <Link href="privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-500">Privacy Policy</Link>
              <div className="media-icons flex gap-2 mt-4">
                <Link href="https://facebook.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Facebook size={16} color="#ffffff" fill="#ffffff" />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Instagram size={16} color="#ffffff" />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Twitter size={16} color="#ffffff" fill="#ffffff" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-500">
                    <Linkedin size={16} color="#ffffff" fill="#ffffff"/>
                </Link>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
