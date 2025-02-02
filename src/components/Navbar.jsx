"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GetStartedButton from './buttons/GetStartedButton';
import '../styles/hamburgerMenu.css';
import '../styles/navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="fixed w-screen flex  justify-center h-[69.4px] md:h-[63.6px] bg-[#060910]">
      <nav className="main-nav navbar-fade-in  max-w-[1200px] h-[69.4px] md:h-[63.6px] flex items-center justify-center w-full text-white px-[19px] md:px-[12px] ] bg-opacity-40 backdrop-blur-lg font-mulish z-20">
        <div className="nav-items flex items-center justify-center w-full h-full border-white/10 border-b md:border-hidden">
          <div className="nav-items-sub flex items-center justify-between md:mx-[22.4px] md:py-[12px] pt-[9px] w-full md:border-white/10 md:border-b">
            <Link href="/" className="text-lg font-bold inline-block max-w-full box-border align-middle">
              <Image
                src="/images/App Logo/HQTransparent_Logo_Hr_001.png"
                alt="App Logo"
                width={100}
                height={100}
                className="w-full"
              />
            </Link>

            <button
              className={`flex sm:hidden hamburger-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <GiHamburgerMenu />
            </button>

            {/* Desktop menu */}
            <div className="hidden sm:block">
              <ul className="flex gap-[40px] text-[14px] leading-[1.2] items-center">
                <NavItem href="/" text="Home" pathname={pathname} />
                <NavItem href="/features" text="Features" pathname={pathname} />
                <NavItem href="/pricing" text="Pricing" pathname={pathname} />
                <NavItem href="/exchange-support" text="Exchange Support" pathname={pathname} />
              </ul>
            </div>

            <div className="sm:block hidden">
              <GetStartedButton href="/XXX" text="Get Started" />
            </div>
          </div>
        </div>
      </nav>

      {/* Separate mobile menu */}
      <div
        className={`mobile-menu fixed top-[63.6px] left-0 right-0 sm:hidden z-10 ${
          isMenuOpen ? 'open' : ''
        } ${isClosing ? 'closing' : ''}`}
      >
        <div className="menu-container">
          <ul className="flex flex-col items-center gap-[20px] py-[20px] border border-[#563EAF4D] rounded-[12px] bg-[#060910] z-50">
            <NavItem href="/" text="Home" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/features" text="Features" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/pricing" text="Pricing" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/exchange-support" text="Exchange Support" pathname={pathname} isMenuOpen={isMenuOpen} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, text, pathname }) {
  const isActive = pathname === href;
  return (
    <li className="flex items-center">
      <Link
        href={href}
        className={`text-white text-[14px] font-normal leading-[1.2] ${
          isActive ? "md:font-semibold font-[600] text-[#ffff]" : "md:font-normal font-[600] text-[#98999C]"
        } hover:text-[#ffff] transition-all duration-300`}
      >
        {text}
      </Link>
    </li>
  );
}