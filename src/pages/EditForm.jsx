import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react'; // Import TinyMCE React component
import Footer from "../Components/Footer.jsx";

const ShowBlogPage = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        title: '',
        body: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
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

    const validateTitle = (title) => {
        const words = title.trim().split(/\s+/);
        return words.length <= 20;
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleEditorChange = (content) => {
        setEditForm({ ...editForm, body: content });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (!validateTitle(editForm.title)) {
            setError('Title must be under 20 words');
            return;
        }
        setError('');
        try {
            await axios.put(`/api/v1/blogs/edit/${id}`, editForm, {
                headers: { 'Content-Type': 'application/json' }
            });
            setIsEditing(false);
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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-indigo-50">
            <div className="container mx-auto p-6 flex-grow">
                {/* Cover Image */}
                <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
                    <img
                        className="w-full h-96 object-cover object-center"
                        src={blogData.image}
                        alt="Blog Cover"
                    />
                </div>

                {/* Blog Content */}
                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-lg font-semibold">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={editForm.title}
                                onChange={handleEditChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-lg font-semibold">Body</label>
                            <Editor
                                apiKey="gajuheuruiqplk071bg268yxvuipk6aj30mbrf5912k1ghax" // Replace with your TinyMCE API key
                                value={editForm.body}
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: 'advlist autolink lists link image charmap preview anchor textcolor',
                                    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                    formats: {
                                        alignleft: { selector: 'p', classes: 'text-left' },
                                        aligncenter: { selector: 'p', classes: 'text-center' },
                                        alignright: { selector: 'p', classes: 'text-right' },
                                        customSpacing: {
                                            selector: 'p',
                                            styles: { 'margin-bottom': '1em' }
                                        }
                                    }
                                }}
                                onEditorChange={handleEditorChange}
                            />
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={cancelEdit}
                                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-6 px-6 lg:px-12 bg-white rounded-lg shadow-lg py-8">
                        <div className="flex flex-col space-y-4">
                            <Link to='/blogs' className="text-indigo-600 hover:text-indigo-800 text-sm underline font-medium">
                                &larr; Go back
                            </Link>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md"
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md"
                                // Add delete logic here if needed
                                >
                                    Delete
                                </button>
                            </div>

                            <p className="text-gray-500 text-sm mt-4">
                                By {blogData.author || "Anonymous"}
                            </p>

                            <h1 className="text-5xl font-bold text-gray-800 mt-2 leading-tight">
                                {blogData.title}
                            </h1>

                            <div
                                className="mt-6 text-lg leading-relaxed text-gray-700 prose lg:prose-xl max-w-none"
                                dangerouslySetInnerHTML={{ __html: blogData.body }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <Footer isIndex={false} />
        </div>
    );
};

export default ShowBlogPage;
