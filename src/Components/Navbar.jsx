import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">BrandName</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8">
                    <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden">
                    <div className="flex flex-col space-y-4 px-4 pb-4 bg-white shadow-lg">
                        <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
