
import React, { useState } from 'react';
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('User registered successfully:', result);
      setMessage({ text: 'User registered successfully!', type: 'success' });
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'Registration failed. Please try again.', type: 'error' });
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/img/grab.png" alt="company-logo" className="mb-4 w-25" />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-700">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your username" 
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" 
              value={formData.username} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </div>
          {message && (
          <p className={`text-center mt-4 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {message.text}
          </p>
        )}
        </form>
      </div>
    </div>
  );
};

export default Register;
