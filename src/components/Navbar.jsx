"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GetStartedButton from './buttons/GetStartedButton';
import LogInButton from './buttons/LogInButton';

import '../styles/hamburgerMenu.css';
import '../styles/navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  // Close menu on pathname change
  useEffect(() => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }
  }, [pathname]);

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
    <div className="relative w-full flex items-center justify-center align-center">
      {/* Main Navbar */}
      <nav className="main-nav top-0 left-0 w-full z-[100] navbar-fade-in h-[69.4px] md:h-[63.6px] flex items-center justify-between px-[19px] md:px-[12px] font-mulish max-w-[1200px]">
  {/* Left: Logo */}
  <div className="relative">
    <Link href="/" className="text-lg font-bold inline-block max-w-full box-border align-middle relative">
      <div className="w-[175px] min-w-[120px] min-h-[48px]"></div> {/* Placeholder to prevent shifting */}
      <Image
        src="/images/App Logo/HQTransparent_Logo_Hr_001.png"
        alt="App Logo"
        width={1200}
        height={1200}
        className="absolute top-0 left-0 w-auto h-full object-contain"
      />
    </Link>
  </div>

  {/* Center: Desktop Menu */}
  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
    <ul className="flex gap-[40px] text-[14px] leading-[1.2] items-center">
      <NavItem href="/" text="Home" pathname={pathname} />
      <NavItem href="/features" text="Features" pathname={pathname} />
      <NavItem href="/pricing" text="Pricing" pathname={pathname} />
      <NavItem href="/exchangeSupport" text="Exchange Support" pathname={pathname} />
    </ul>
  </div>

  {/* Right: Buttons & Mobile Menu Toggle */}
  <div className="flex items-center gap-[1rem]">
    {/* Mobile Menu Toggle */}
    <button
      className={`flex sm:hidden hamburger-btn ${isMenuOpen ? 'active' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <GiHamburgerMenu />
    </button>

    {/* Desktop Buttons */}
    <div className="hidden sm:flex gap-[1rem]">
      <LogInButton href="/login" text="Log In" />
      <GetStartedButton href="/getstarted" text="Get Started" />
    </div>
  </div>
</nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu sm:hidden ${isMenuOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
        <div className="menu-container">
          <ul className="flex flex-col items-center gap-[20px] py-[20px] border border-[#563EAF4D] rounded-[12px] bg-[#060910] ">
            <NavItem href="/" text="Home" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/features" text="Features" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/pricing" text="Pricing" pathname={pathname} isMenuOpen={isMenuOpen} />
            <NavItem href="/exchangeSupport" text="Exchange Support" pathname={pathname} isMenuOpen={isMenuOpen} />
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
        className={`text-[#cac4da] text-[14px] font-normal leading-[1.2] ${
          isActive ? "md:font-semibold font-[600] text-[#ffff]" : "md:font-normal font-[600] duration-700 text-[#cac4da]"
        } hover:text-[#ffff] transition-all duration-300`}
      >
        {text}
      </Link>
    </li>
  );
}
