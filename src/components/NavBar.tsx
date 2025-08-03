/* eslint-disable @next/next/no-img-element */
'use client';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, { useState } from 'react';
import { palette } from '../styles/palette';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1c2829]/95 to-[#1c2829]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center">
          {/* <img src="/logo.jpg" alt="Logo" className="h-10 w-auto mr-3" /> */}
          <span className="text-white text-2xl font-bold">AB Ghule Cabs</span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white/20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        {/* Desktop Menu */}
        <NavigationMenu.Root className="hidden md:flex flex-1 justify-end">
          <NavigationMenu.List className="flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Our Fleet", href: "/fleet" },
              { name: "Contact", href: "/contact" },
            ].map(link => (
              <NavigationMenu.Item key={link.name}>
                <NavigationMenu.Link
                  href={link.href}
                  className="text-white/90 font-semibold px-3 py-2 rounded transition-all duration-200 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {link.name}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#26393b]/95 backdrop-blur-sm border-t border-white/10">
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex flex-col">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Our Fleet", href: "/fleet" },
                { name: "Contact", href: "/contact" },
              ].map(link => (
                <NavigationMenu.Item key={link.name}>
                  <NavigationMenu.Link
                    href={link.href}
                    className="block text-white/90 font-semibold px-4 py-3 border-b border-white/10 hover:bg-white/5 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      )}
    </nav>
  );
};

export default Navbar;