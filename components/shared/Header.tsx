"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" fill="white"/>
            </svg>
          </div>
          <span className="font-semibold text-lg">ATPS</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4">
          <nav className="flex flex-col gap-4">
            <Link href="#feature" className="text-gray-600 hover:text-black transition-colors">Feature</Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">About</Link>
            <Link href="#testimonial" className="text-gray-600 hover:text-black transition-colors">Testimonial</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
