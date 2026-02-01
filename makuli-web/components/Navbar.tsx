"use client";
import Link from 'next/link';
import {useState} from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'}
  ];

   return (
     <nav className="w-full border-b border-zinc-200 bg-white">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo*/}
          <div className="shrink-0 flex items-center"> 
            <Link href="/" className="text-4xl font-bold text-black m-auto">
              Makuli
            </Link>
            {/* links */}
          </div>
            <div className="hidden md:flex md:items-center md:space-x-8"> 
              {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-black transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* link mobile*/}
            {/* Mobile Toggle Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-600 hover:text-black focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-zinc-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-zinc-600 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
     </nav>
      );
}
