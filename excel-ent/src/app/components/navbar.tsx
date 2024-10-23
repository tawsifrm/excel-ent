'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/excelentlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 py-4 shadow-md z-50 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Excel-ent Logo" width={120} height={60} className="mr-2" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900 transition">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
            Contact
          </Link>
          <Link href="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white bg-opacity-70 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/features" className="text-gray-700 hover:text-gray-900 transition" onClick={toggleMenu}>
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition" onClick={toggleMenu}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
