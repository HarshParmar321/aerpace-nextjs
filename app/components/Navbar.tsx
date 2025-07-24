'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'aerVerse', href: '/aerverse' },
  { name: 'aerDock', href: '/aerdock' },
  { name: 'aerWing', href: '/aerwing' },
  { name: 'aerCar', href: '/aercar' },
  { name: 'aerVolt', href: '/aervolt' },
  { name: 'aerShield', href: '/aershield' },
  { name: 'Racers', href: '/racers' },
  { name: '#MakeTime', href: '/maketime' },
  { name: 'Investors', href: '/investors' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuVisible(true);
    } else {
      const timer = setTimeout(() => setMenuVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 ease-in-out
        ${
          isScrolled
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow'
            : 'bg-black bg-opacity-20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            href="/"
            className={`text-3xl font-extrabold tracking-wide rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300 ${
              isScrolled ? 'text-gray-100' : 'text-gray-100'
            }`}
          >
            Aerpace
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3 py-2 font-semibold transition-transform duration-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400
                    ${
                      isActive
                        ? 'underline underline-offset-4 scale-105 text-gray-200'
                        : 'text-gray-200 hover:text-white hover:underline hover:underline-offset-4 hover:scale-105'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-gray-200 transition-all duration-300 ease-in-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div
          className={`md:hidden bg-gray-900 bg-opacity-95 overflow-hidden transform transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400
                    ${
                      isActive
                        ? 'bg-gray-700 bg-opacity-70 text-gray-200 underline underline-offset-4'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
