import React from 'react';
import {Link} from "react-router-dom";

const BlogBox = (props) => {
    console.log(props);
    return (
        <div className="blog-box bg-white border border-gray-200 rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="text-gray-500 text-xs mb-2">by {"John Doe"}</div>
            <div className="flex items-start space-x-4">
                <div className="flex-1">
                    <h2 className="text-base font-semibold text-gray-800 leading-tight">
                       <Link to={`/blogs/${props.blog._id}`}> {  props.blog.title}</Link>
                    </h2>
                </div>
                <div className="h-24 w-24">
                    <img className="object-cover h-full w-full object-cover object-center rounded-md" src={  props.blog.image} alt={props.blog.title} />
                </div>
            </div>
        </div>
    );
};

export default BlogBox;
