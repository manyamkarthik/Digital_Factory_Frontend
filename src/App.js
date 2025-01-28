import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ToDoListPage from './components/TodoListPage';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import { AuthProvider } from './context/AuthContext';
import { PageNotFound } from './components/PageNotFound';
import { loginUser } from './slices/authSlice'; // Import loginUser action

// New component to check if the token exists and login the user
const AuthLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loginUser());  // Mark user as logged in
    }
  }, [dispatch]);

  return null;  // This component doesn't render anything
};

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Nav />
          <AuthLoader /> 
          <Routes>
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<ToDoListPage />} />
            <Route path="/" element={<ToDoListPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
