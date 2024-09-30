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
        <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 py-4 shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={Logo} alt="Excel-ent Logo" width={120} height={60} className="mr-2" />
                    </Link>
                </div>
                <div className="hidden md:flex items-center">
                    <Link href="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                        Login
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex items-center p-2"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white bg-opacity-70`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={toggleMenu}>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
