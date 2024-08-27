import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BlogBox from "../Components/BlogBox.jsx"
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";
const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const getBlogs = async () => {
        const res = await axios.get('/api/v1/blogs');
        console.log(res.data.data);
        setBlogs(res.data.data);
    }
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <div className="blogs-page min-h-screen ">
            <div className="  flex justify-between px-4 py-4">
                <div className="logo text-xl font-semibold">Readme</div>
                <div className="avatar ">T</div>
            </div>
            <div className="ad-new underline text-sm border mt-4 px-4 py-4 flex gap-2"><Link to={'/blogs/new'}>Start writing</Link>

            </div>
            {blogs.length > 0 && (
                blogs.map((blog, index) => (
                    <BlogBox key={index} blog={blog} />
                ))
            )}
            <Footer isIndex={false} />
        </div>
    );
};

export default BlogsPage;

//check