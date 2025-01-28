import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validateForm = () => {
        let isValid = true;

        if (!username) {
            setUsernameError('Username is required.');
            isValid = false;
        } else {
            setUsernameError('');
        }

        if (!email || !validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required.');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const success = await dispatch(register(username, email, password));
                if (success) {
                    navigate('/tasks');
                }
            }
            catch (err) {
              if (err.response && err.response.data) {
                setError(err.response.data.message || 'Registration failed. Please try again later.');
              } else {
                setError('Registration failed. Please try again later.');
              }
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Sign Up
                </h2>
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameError && <div className="text-red-600 text-sm mt-1">{usernameError}</div>}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="text-red-600 text-sm mt-1">{emailError}</div>}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <div className="text-red-600 text-sm mt-1">{passwordError}</div>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;