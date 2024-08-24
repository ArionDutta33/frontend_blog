import React from 'react';

const Footer = (props) => {
    return (
        <div className={`border border-black ${props.isIndex?`fixed bottom-0 w-full`:``}  w-full flex py-4 px-4 bg-black text-white text-xs gap-6`}>
            <div>About</div>
            <div>Help</div>
            <div>Terms</div>
            <div>Privacy</div>
        </div>
    );
};

export default Footer;