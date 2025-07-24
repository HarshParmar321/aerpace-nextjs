import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube
  } from 'lucide-react';
  import Link from 'next/link';
  
  export default function Footer() {
    return (
      <footer className="bg-[#2c2c2e] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo + Socials */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">aerpace</h1>
            <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-300 hover:text-white transition hover:drop-shadow-[0_0_10px_#fff]">
            <Linkedin size={18} /> Linkedin
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition hover:drop-shadow-[0_0_10px_#fff]">

                <Twitter size={18} /> X
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition hover:drop-shadow-[0_0_10px_#fff]">

                <Youtube size={18} /> YouTube
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition hover:drop-shadow-[0_0_10px_#fff]">

                <Instagram size={18} /> Instagram
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition hover:drop-shadow-[0_0_10px_#fff]">

                <Facebook size={18} /> Facebook
              </li>
            </ul>
          </div>
  
          {/* Solutions */}
          <div>
            <h4 className="text-gray-400 font-medium mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">aerVerse</Link></li>
            </ul>
          </div>
  
          {/* Platform */}
          <div>
            <h4 className="text-gray-400 font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">aerDock</Link></li>
              <li><Link href="#" className="hover:text-white transition">aerWing</Link></li>
              <li><Link href="#" className="hover:text-white transition">aerCar</Link></li>
              <li><Link href="#" className="hover:text-white transition">aerVolt</Link></li>
              <li><Link href="#" className="hover:text-white transition">aerShield</Link></li>
            </ul>
          </div>
  
          {/* About Us */}
          <div>
            <h4 className="text-gray-400 font-medium mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Company</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">News</Link></li>
              <li><Link href="#" className="hover:text-white transition">Racers</Link></li>
              <li><Link href="#" className="hover:text-white transition">#MakeTime</Link></li>
              <li><Link href="#" className="hover:text-white transition">Investor Relations</Link></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h4 className="text-gray-400 font-medium mb-4">Get Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
  
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
          © 2025 aerpace Industries Limited. All rights reserved.
        </div>
      </footer>
    );
  }
  