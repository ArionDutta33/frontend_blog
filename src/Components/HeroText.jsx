import React from 'react';
import { Link } from 'react-router-dom';
const HeroText = () => {
    return (
        <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Welcome to Your Readme
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Discover amazing features and connect with us today.
            </p>
            <div className="mt-8">
                <button className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-500 transition">
                    <Link to={"/register"}>Get Started</Link>
                </button>
            </div>
        </div>
    );
};

export default HeroText;
