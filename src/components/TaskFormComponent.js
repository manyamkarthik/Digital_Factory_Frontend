import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialTitle = '', isEditing = false, isCompleted = false }) => {
    const [title, setTitle] = useState(initialTitle);
    const [completed, setCompleted] = useState(isCompleted);

    useEffect(() => {
        setTitle(initialTitle);
        setCompleted(isCompleted);
    }, [initialTitle, isCompleted])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, completed });
        if (!isEditing) {
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
            <div>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task title"
                    required
                />
            </div>
            {isEditing && (
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    id="completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                  />
                   <label htmlFor="completed" className="text-gray-700">
                    Completed
                  </label>
              </div>
            )}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                {isEditing ? 'Update' : 'Add'} Task
            </button>
        </form>
    );
};

export default TaskForm;