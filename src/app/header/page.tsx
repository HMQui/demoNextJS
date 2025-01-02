'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [login, setLogin] = useState<boolean>(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setLogin(() => !!token);
    }, []);
    

    return (
        <header className="w-full h-16 md:h-20 fixed top-0 left-0 z-50 bg-white shadow-md flex items-center px-4 md:px-8">
            <div className="flex items-center justify-between w-full">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Demo
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                        Contact
                    </Link>
                </nav>

                {/* Action Button */}
                <div>
                    {!login && <Link
                        href="/login"
                        className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Sign In
                    </Link>}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700 hover:text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
