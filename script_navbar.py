import sys

content = ''''use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, User, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={\ixed top-0 left-0 right-0 z-50 transition-all duration-300 \\}>
      <nav className={\mx-auto max-w-7xl transition-all duration-500 rounded-full \\}>
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <MapPin className={\w-8 h-8 transition-colors \\} />
              <span className={\	ext-2xl font-serif font-bold transition-colors \\}>WanderAI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/search" className={\	ext-sm font-medium transition-colors hover:text-[#CA8A04] \\}>
                Destinations
              </Link>
              <Link href="/about" className={\	ext-sm font-medium transition-colors hover:text-[#CA8A04] \\}>
                About
              </Link>
              <Link href="/contact" className={\	ext-sm font-medium transition-colors hover:text-[#CA8A04] \\}>
                Contact
              </Link>
              <Link href="/dashboard" className={\	ext-sm font-medium transition-colors hover:text-[#CA8A04] \\}>
                My Trips
              </Link>
              <Button asChild className={\ounded-full px-6 transition-all hover:scale-105 \\}>
                <Link href="/admin/login">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={\md:hidden \\}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-stone-200 rounded-b-2xl absolute left-0 right-0 top-full shadow-2xl">
                <Link
                  href="/search"
                  className="block px-4 py-3 text-stone-800 hover:bg-stone-100 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-stone-800 hover:bg-stone-100 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-stone-800 hover:bg-stone-100 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/dashboard"
                  className="block px-4 py-3 text-stone-800 hover:bg-stone-100 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  My Trips
                </Link>
                <div className="px-4 py-3">
                  <Button asChild className="w-full bg-[#CA8A04] text-white rounded-xl">
                    <Link href="/admin/login">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
'''

with open('components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
