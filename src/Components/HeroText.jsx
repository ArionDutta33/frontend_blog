import React from 'react';
import {Link} from "react-router-dom";

const HeroText = () => {
    return (
        <div className="heroText   px-6 mt-28">
            <div className="text-6xl font-medium ">
                Human stories <br/>
                & ideas
            </div>
            <div className="text-xl mt-8">
                A place to read, write, and deepen your understanding
            </div>
            <div className="bg-green-600 text-white w-fit px-10 mt-10 text-xl tracking-tighter py-2 rounded-full"><Link to={'/register'}>Start reading</Link></div>
        </div>
    );
};

export default HeroText;