import React from 'react';

const BlogBox = ({ title, author, image }) => {
    return (
        <div className="blog-box bg-white border border-gray-200 rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="text-gray-500 text-xs mb-2">by {author || "John  Doe"}</div>
            <div className="flex items-start space-x-4">
                <div className="flex-1">
                    <h2 className="text-base font-semibold text-gray-800 leading-tight">
                        {title || "What are the problems India is going to face in the future"}
                    </h2>
                </div>
                <div className="h-24 w-24">
                    <img className="object-cover h-full w-full rounded-md" src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3q9O1lr3vhTXJD7Oq7y0EJATknCP3U8f-A&s"} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default BlogBox;
