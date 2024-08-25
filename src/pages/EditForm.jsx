import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const EditForm = ({ blogData, editForm, handleEditChange, handleEditorChange, handleEditSubmit, cancelEdit }) => {
    return (
        <form onSubmit={handleEditSubmit} className="space-y-6">
            <div className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={editForm.title}
                        onChange={handleEditChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog title"
                    />
                </div>
                <div>
                    <label htmlFor="body" className="block text-lg font-medium text-gray-700">Body</label>
                    <Editor
                        apiKey='gajuheuruiqplk071bg268yxvuipk6aj30mbrf5912k1ghax'
                        init={{
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                            height: 300,
                        }}
                        initialValue={editForm.body}
                        onChange={(e) => handleEditorChange(e.target.getContent())}
                    />
                </div>
            </div>
            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditForm;
