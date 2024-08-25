import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import EditForm from './EditForm';
import Footer from "../Components/Footer.jsx";

const ShowBlogPage = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        title: '',
        body: ''
    });

    useEffect(() => {
        // Fetch blog data from backend
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`/api/v1/blogs/${id}`);
                setBlogData(response.data.data);
                setEditForm({
                    title: response.data.data.title,
                    body: response.data.data.body
                });
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        fetchBlogData();
    }, [id]);

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleEditorChange = (content) => {
        setEditForm({ ...editForm, body: content });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/blogs/edit/${id}`, editForm, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsEditing(false);
            // Fetch updated blog data
            const response = await axios.get(`/api/v1/blogs/${id}`);
            setBlogData(response.data.data);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    if (!blogData) return <div className="text-center text-gray-500">Loading...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto p-4 flex-grow">
                {/* Cover Image */}
                <div className="border rounded-lg overflow-hidden shadow-lg">
                    <img
                        className="w-full h-96 object-cover object-center"
                        src={blogData.image}
                        alt="Blog Cover"
                    />
                </div>

                {/* Blog Content */}
                {isEditing ? (
                    <EditForm
                        blogData={blogData}
                        editForm={editForm}
                        handleEditChange={handleEditChange}
                        handleEditorChange={handleEditorChange}
                        handleEditSubmit={handleEditSubmit}
                        cancelEdit={cancelEdit}
                    />
                ) : (
                    <div className="mt-6 px-4">
                        <div className="flex flex-col space-y-4">
                            <div className="text-xm underline">
                                <Link to='/blogs' className="text-blue-500 hover:text-blue-700">Go back</Link>
                            </div>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                // Add delete logic here if needed
                            >
                                Delete
                            </button>
                            <p className="text-gray-500 text-sm">By {blogData.author || "Anonymous"}</p>
                            <h1 className="text-4xl font-bold text-gray-800 mt-2">{blogData.title}</h1>
                            <div
                                className="mt-4 text-lg leading-relaxed text-gray-700"
                                dangerouslySetInnerHTML={{ __html: blogData.body }}
                            />
                        </div>
                    </div>
                )}
            </div>

            <footer className="bg-gray-800 text-white flex justify-around py-4 text-center mt-auto">
                <div className="text-xs">About</div>
                <div className="text-xs">Help</div>
                <div className="text-xs">Terms</div>
                <div className="text-xs">Privacy</div>
            </footer>
        </div>
    );
};

export default ShowBlogPage;
