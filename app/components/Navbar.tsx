'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'aerVerse', href: '/aerverse' },
  { name: 'aerDock', href: '/aerdockk' },
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

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-blue-500 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-2xl font-bold tracking-wide">
            Aerpace
          </Link>
        </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-white hover:text-gray-200 font-semibold cursor-pointer transition duration-200 ${
                    pathname === item.href ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
