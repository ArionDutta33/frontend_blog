import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogBox from "../Components/BlogBox.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBlogs = async () => {
        try {
            const res = await axios.get('/api/v1/blogs');
            setBlogs(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="blogs-page bg-[#F7F4ED] min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-lg">
                <div className="logo text-2xl font-bold text-gray-800">Readme</div>
                <div className="avatar bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold">
                    T
                </div>
            </div>

            {/* "Start Writing" Button */}
            <div className="flex justify-end px-6 mt-4">
                <Link
                    to={'/blogs/new'}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition duration-200 ease-in-out"
                >
                    Start Writing
                </Link>
            </div>

            {/* Blog List */}
            <div className="flex-grow container mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    <div className="text-center text-gray-600">Loading blogs...</div>
                ) : (
                    blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <BlogBox key={index} blog={blog} />
                        ))
                    ) : (
                        <div className="text-center text-gray-600">No blogs available.</div>
                    )
                )}
            </div>

            <Footer isIndex={false} />
        </div>
    );
};

export default BlogsPage;
