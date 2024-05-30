import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import Success from './Success';
import backgroundImage from "./ab.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    setLoading(true); // Set loading state to true
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages

    axios.post('http://localhost:3000/login', {
      email: email,
      password: password,
    })
    .then(res => {
      setLoading(false); // Set loading state to false

      if (res.data.code === 500) {
        setError('User not found');
      } else if (res.data.code === 404) {
        setError('Password wrong');
      } else if (res.data.code === 200) {
        setSuccess('Login successful'); // Set success message
        localStorage.setItem('TOKEN', res.data.token);
        localStorage.setItem('EMAIL', res.data.email);
        navigate('/');
      }
    })
    .catch(err => {
      console.log(err);
      setLoading(false); // Set loading state to false
      setError('An error occurred. Please try again later.');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            value={email}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              className="w-full px-3 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {loading && <Loader />} {/* Display loader if loading state is true */}
        {error && <Error message={error} />} {/* Display error message */}
        {success && <Success message={success} />} {/* Display success message */}
        <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-md mb-4">
          Submit
        </button>
        <p className="text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link>
        </p>
        <div className="w-full h-px bg-gray-400 my-4"></div> {/* Line separator */}
        <p className="text-center"><Link to="/forgetPassword" className="text-blue-500">Forgot Password</Link></p>
      </div>
    </div>
  );
};

export default Login;
