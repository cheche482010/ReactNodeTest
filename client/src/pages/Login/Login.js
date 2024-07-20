import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { username, password } = formData;
  
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const result = await response.json();
  
      if (result.message === 'User logged in successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are now logged in!',
        }).then(() => {
          navigate('/'); 
        });
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/img/grab.png" alt="company-logo" className="mb-4 w-25" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-green-700 mb-2">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className="w-full px-3 py-2 border border-green-700 rounded" 
              placeholder="Enter your username" 
              value={formData.username} 
              onChange={handleChange} 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-green-700 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full px-3 py-2 border border-green-700 rounded" 
              placeholder="Enter your password" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Sign In
          </button>
          {message && <p className={`text-center mt-4 ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
