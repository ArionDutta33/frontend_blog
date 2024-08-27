import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import HeroText from "../Components/HeroText.jsx";
import Footer from "../Components/Footer.jsx";

const IndexPage = () => {
    return (
        <div className="bg-[#F7F4ED] min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 lg:px-8">
                    {/* Hero Text */}
                    <HeroText />

                    {/* Hero Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                        <img
                            src="https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Decorative"
                            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </main>
            <Footer isIndex={true} />
        </div>
    );
};

export default IndexPage;
