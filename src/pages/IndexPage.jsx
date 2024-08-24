import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import HeroText from "../Components/HeroText.jsx";
import Footer from "../Components/Footer.jsx";

const IndexPage = () => {
    return (
        <div className="bg-[#F7F4ED] min-h-screen ">
            <Navbar />
            <HeroText />
            <Footer isIndex={true}/>

        </div>
    );
};

export default IndexPage;