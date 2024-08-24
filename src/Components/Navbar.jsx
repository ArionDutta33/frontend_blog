import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar px-6 py-6 flex justify-between border-b-[1px] border-b-black">
            <div className="logo text-2xl font-semibold">ReadMe</div>
            <div className="btn  bg-black text-white px-4 py-2 rounded-full">
                <Link to={'/register'} className="tracking-tighter">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;