'use client'
import React, { useState } from "react";

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
                        <a href="/">Home</a>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <a href="SWOT">SWOT</a>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <a href="team-skills">Team Skills</a>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <a href="goals">Goals</a>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <a href="developmental-model">Developmental Model</a>
                    </li>
                    <li className="hover:text-gray-400 transition">
                        <a href="putters-bay">Putter's Bay</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
