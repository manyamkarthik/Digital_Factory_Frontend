
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
        throw error.response.data.errors;
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
        throw error.response.data.errors;
    }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUser());
};