import React, { useState, useEffect } from 'react';
import TaskForm from './TaskFormComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTasks, addTheTask, updateTheTask, deleteTheTask } from '../actions/taskActions';
import { loadUser } from '../slices/authSlice'
import { FaEdit, FaTrash } from 'react-icons/fa';


const ToDoListPage = () => {
  const tasks = useSelector(state => state.task.tasks);
  const authState = useSelector(state => state.auth);
  const [editTask, setEditTask] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        if(!authState.isAuthenticated) {
            navigate("/login")
        }
        dispatch(loadUser())
        dispatch(getTasks());
  }, [dispatch, authState.isAuthenticated, navigate]);

  const handleAddTask = async (newTask) => {
    await dispatch(addTheTask(newTask))
  };

  const handleUpdateTask = (task) => {
      setEditTask(task)
  };

    const handleUpdateSubmit = async (updatedTask) => {
      await dispatch(updateTheTask(editTask._id, updatedTask));
      setEditTask(null);
    }


    const handleDeleteTask = async (taskId) => {
        await dispatch(deleteTheTask(taskId));
    };

    const TaskItem = ({task}) => {
      return (
          <li className="bg-white shadow-md rounded-md p-2 mb-2 flex items-center justify-between">
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{task.title}</span>
              <div className="flex space-x-2">
                    <button
                       className="bg-blue-100 hover:bg-blue-200 text-blue-600  rounded p-1"
                       onClick={() => handleUpdateTask(task)}
                    >
                      <FaEdit />
                    </button>
                    <button className="bg-red-100 hover:bg-red-200 text-red-600 rounded p-1" onClick={() => handleDeleteTask(task._id)}>
                       <FaTrash/>
                   </button>
             </div>
          </li>
      )
    }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-md max-w-3xl">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b border-blue-600 pb-2">To-Do List</h2>
      <TaskForm
        onSubmit={editTask ? handleUpdateSubmit : handleAddTask}
        initialTitle={editTask ? editTask.title : ""}
        isEditing={!!editTask}
        isCompleted={editTask ? editTask.completed : false}
      />
        <ul className="mt-4">
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </ul>
    </div>
  );
};
export default ToDoListPage;