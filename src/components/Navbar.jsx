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

  // Close menu on initial render or when pathname changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }
  }, [pathname]); // Runs when `pathname` changes

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
    <div className="relative w-full mx-auto"> {/* This wrapper ensures positioning works */}
  <nav className="main-nav fixed top-0 left-0 w-full z-[100] navbar-fade-in h-[69.4px] md:h-[63.6px] flex items-center justify-center px-[19px] md:px-[12px] font-mulish">
    <div className="nav-items mx-auto flex items-center justify-center w-full h-full border-white/10 border-b md:border-hidden">
      <div className="nav-items-sub flex items-center md:justify-around justify-between md:mx-auto md:py-[12px] pt-[9px] w-full md:border-white/10 md:border-b">
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

        <div className="hidden sm:block">
          <ul className="flex gap-[40px] text-[14px] leading-[1.2] items-center">
            <NavItem href="/" text="Home" pathname={pathname} />
            <NavItem href="/features" text="Features" pathname={pathname} />
            <NavItem href="/pricing" text="Pricing" pathname={pathname} />
            <NavItem href="/exchange-support" text="Exchange Support" pathname={pathname} />
          </ul>
        </div>

        <div className="sm:flex hidden gap-[1rem]">
          <LogInButton href="/login" text="Log In" />
          <GetStartedButton href="/getstarted" text="Get Started" />
        </div>
      </div>
    </div>
  </nav>

  {/* Mobile Menu - Now Positioned Correctly */}
  <div
    className={`mobile-menu sm:hidden ${
      isMenuOpen ? 'open' : ''
    } ${isClosing ? 'closing' : ''}`}
  >
    <div className="menu-container">
      <ul className="flex flex-col items-center gap-[20px] py-[20px] border border-[#563EAF4D] rounded-[12px] bg-[#060910] ">
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
        className={`text-[#cac4da] text-[14px] font- font-normal leading-[1.2] ${
          isActive ? "md:font-semibold font-[600] text-[#ffff]" : "md:font-normal font-[600] duration-700 text-[#cac4da]"
        } hover:text-[#ffff] transition-all duration-300`}
      >
        {text}
      </Link>
    </li>
  );
}
