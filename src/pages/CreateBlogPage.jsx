import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Editor } from '@tinymce/tinymce-react';

const BlogForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [editorContent, setEditorContent] = useState('');

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', editorContent);
        formData.append('coverImage', data.coverImage[0]); // Ensure 'coverImage' matches

        try {
            const response = await axios.post('/api/v1/blogs/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Blog created successfully!');
            console.log(response.data);
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
            console.error('Error uploading blog:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
            <Toaster />
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a New Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                        <input
                            id="title"
                            type="text"
                            {...register('title', { required: 'Title is required' })}
                            className={`block w-full px-4 py-2 border rounded-md shadow-sm ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Enter blog title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="body" className="block text-lg font-medium text-gray-700">Body</label>
                        <Editor
                            apiKey='gajuheuruiqplk071bg268yxvuipk6aj30mbrf5912k1ghax'
                            init={{
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                setup: (editor) => {
                                    editor.on('change', () => {
                                        setEditorContent(editor.getContent());
                                    });
                                },
                                height: 300,
                            }}
                            initialValue=""
                            textareaName="body"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="coverImage" className="block text-lg font-medium text-gray-700">Cover Image</label>
                        <input
                            id="coverImage"
                            type="file"
                            {...register('coverImage', { required: 'Cover image is required' })}
                            className={`block w-full px-4 py-2 border rounded-md shadow-sm ${errors.coverImage ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.coverImage && <p className="text-red-500 text-sm">{errors.coverImage.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
