import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='mt-24'>
    <div className="container mx-auto p-8  ">
      <div className="form-container max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="text-center text-2xl font-bold mb-4">
            {isLogin ? 'Login' : 'Register'}</h2>

        <form>
          {isLogin ? (
            // Login Form
            <>
              <label className="block mb-2">
                Email:
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
              </label>
              <label className="block mb-4">
                Password:
                <input type="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
              </label>
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Login
              </button>
            </>
          ) : (
            // Register Form
            <>
              <label className="block mb-2">
                First Name:
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your first name" />
              </label>
              <label className="block mb-2">
                Last Name:
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter your last name" />
              </label>
              <label className="block mb-2">
                Email:
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
              </label>
              <label className="block mb-2">
                Password:
                <input type="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
              </label>
              <label className="block mb-4">
                Confirm Password:
                <input type="password" className="w-full p-2 border rounded" placeholder="Confirm your password" />
              </label>
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Register
              </button>
            </>
          )}
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleToggle}
            className="text-blue-500 underline"
          >
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
        <div className="text-center mt-4">
            <Link to="/" className="text-blue-500 underline">
              Back
            </Link>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
