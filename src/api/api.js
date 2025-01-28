import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error)
})


export default api;