import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast,{Toaster} from "react-hot-toast";

const BlogForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('coverImage', data.coverImage[0]); // Ensure 'coverImage' matches

        try {
            const response = await axios.post('/api/v1/blogs/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Successfully created!');
            console.log(response.data);
        } catch (error) {
            toast.error(error.response.data.message);
            console.error('Error uploading blog:', error);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <Toaster/>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">Title</label>
                        <input
                            id="title"
                            type="text"
                            {...register('title', { required: true })}
                            className="bg-gray-700 border border-gray-600 text-white rounded-lg p-2 w-full"
                            placeholder="Enter blog title"
                        />
                    </div>
                    <div>
                        <label htmlFor="body" className="block text-sm font-medium">Body</label>
                        <textarea
                            id="body"
                            {...register('body', { required: true })}
                            className="bg-gray-700 border border-gray-600 text-white rounded-lg p-2 w-full"
                            placeholder="Enter blog body"
                            rows="4"
                        />
                    </div>
                    <div>
                        <label htmlFor="coverImage" className="block text-sm font-medium">Cover Image</label>
                        <input
                            id="coverImage"
                            type="file"
                            {...register('coverImage', { required: true })}
                            className="bg-gray-700 border border-gray-600 text-white rounded-lg p-2 w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
