// src/components/LoginForm.jsx
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('This is a demo. Login/Signup logic not implemented.');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="sr-only">Username</label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors duration-300"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 font-semibold ml-1 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;