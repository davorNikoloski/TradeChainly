// src/components/Navbar.js
"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // For determining the active link


import GetStartedButton from './buttons/GetStartedButton';

import '../styles/hamburgerMenu.css';
import '../styles/navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For responsive menu
  const pathname = usePathname(); // Get current route

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar-fade-in fixed w-full text-white px-[12px] h-[63.6px] border border-white/10 border-b bg-[#060910] bg-opacity-40 backdrop-blur-lg font-mulish z-10 sm:px-[14px]">
        <div className="flex items-center justify-center w-full">
            <div className="flex items-center justify-between mx-[22.4px] py-[12px] sm:py-[6px] w-full max-w-[1200px]">    
            <Link href="/" className="text-lg font-bold inline-block max-w-full box-border align-middle">
                <Image
                    src="/images/App Logo/HQTransparent_Logo_Hr_001.png"
                    alt="App Logo"
                    width={100} // Set the width of the image
                    height={100} // Set the height of the image
                    className="w-full" // Ensures the logo scales within its container if necessary
                />
            </Link>

            {/* Hamburger Icon */}
            <button
                className={`sm:block hidden hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <GiHamburgerMenu />
            </button>
            
            <div
            className={`${
                isMenuOpen ? "block" : "hidden"
            } sm:flex sm:space-x-4 absolute sm:relative top-full left-0 w-full sm:w-auto bg-[#060910] sm:bg-transparent`}
            >
            <ul
                className={`${
                isMenuOpen ? "flex flex-col items-start p-4 gap-4" : "flex gap-[40px]"
                } text-[14px] leading-[1.2] sm:flex-row sm:items-center sm:justify-center`}
            >
                <NavItem href="/" text="Home" pathname={pathname} />
                <NavItem href="/features" text="Features" pathname={pathname} />
                <NavItem href="/pricing" text="Pricing" pathname={pathname} />
                <NavItem href="/exchange-support" text="Exchange Support" pathname={pathname} />
                {/*}
                {isMenuOpen && (
                <li className="mt-4">
                    <GetStartedButton href="/XXX" text="Get Started" />
                </li>
                )}
                */}
            </ul>
            </div>
            {/* Default position for the button when menu is closed */}
            <div className="sm:block hidden">
                <GetStartedButton href="/XXX" text="Get Started" />
            </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, text, pathname }) {
    const isActive = pathname === href;
    return (
      <li className="flex items-center">
        <Link
          href={href}
          className={`text-white text-[14px] font-normal leading-[1.2] ${
            isActive
              ? "font-semibold text-[#ffff]" // Active link color (brand color)
              : "font-normal text-[#9B9D9F]" // Default color for inactive links
          } hover:text-[#ffff] transition-all duration-300`}
        >
          {text}
        </Link>
      </li>
    );
  }
  
  