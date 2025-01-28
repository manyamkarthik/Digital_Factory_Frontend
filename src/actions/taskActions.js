import api from '../api/api';
import { setTaskList, addTask, updateTask, deleteTask} from '../slices/taskSlice';


export const getTasks = () => async (dispatch) => {
  try {
    const response = await api.get('/tasks');
    dispatch(setTaskList(response.data));
  } catch (error) {
    // console.error(error);
  }
};


export const addTheTask = (newTask) => async (dispatch) => {
    try {
      const response = await api.post('/tasks', newTask)
      dispatch(addTask(response.data));
    }
    catch (err) {
      //  console.log(err);
    }

};


export const updateTheTask = (taskId, updatedTask) => async (dispatch) => {
    try {
        const response = await api.put(`/tasks/${taskId}`, updatedTask)
        dispatch(updateTask(response.data));
     }
     catch (err) {
         console.log(err)
     }
};

export const deleteTheTask = (taskId) => async (dispatch) => {
  try {
    await api.delete(`/tasks/${taskId}`);
    dispatch(deleteTask(taskId));
  } catch (error) {
    console.error(error);
  }
};