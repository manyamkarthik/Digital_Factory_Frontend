
import api from '../api/api'; 
import { loginUser, registerUser, logoutUser } from '../slices/authSlice';

export const register = (username, email, password) => async (dispatch) => {
    try {
        const response = await api.post('/register', { username, email, password });
        if(response.data.token) {
            localStorage.setItem('token', response.data.token);
            dispatch(registerUser());
            return true;
        }
        return false;
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors; // Specific validation errors from the server
       }  else if (error instanceof Error && error.message) {
           throw error; // Throw the error if it is an object with message
       } else {
         throw new Error("An unknown error occurred");  // Generic Error with message
       }
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await api.post('/login', { email, password });
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          dispatch(loginUser());
            return true;
        }
        return false;
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.errors) {
            throw error.response.data.errors; // Specific validation errors from the server
       }  else if (error instanceof Error && error.message) {
           throw error; // Throw the error if it is an object with message
       } else {
         throw new Error("An unknown error occurred");  // Generic Error with message
       }
    }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUser());
};