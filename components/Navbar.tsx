'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-none text-white w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
            
                <div className="text-2xl font-bold">The Academic Weapons</div>

                {/* Hamburger Menu */}
                <div
                    className="lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>

                {/* Links */}
                <ul
                    className={`lg:flex gap-6 ${
                        isOpen ? "block" : "hidden"
                    } lg:static absolute bg-gray-900 w-full left-0 top-12 lg:w-auto lg:bg-transparent`}
                >
                    <li className="hover:text-gray-400 transition">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <Link href="/SWOT">SWOT</Link>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <Link href="/team-skills">Team Skills</Link>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <Link href="/goals">Goals</Link>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <Link href="/developmental-model">Developmental Model</Link>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <Link href="/putters-bay">Putter&apos;s Bay</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
