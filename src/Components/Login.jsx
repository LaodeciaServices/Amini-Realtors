import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '', // Only needed for register form
  };

  const [isLogin, setIsLogin] = useState(true); // Initial state is Login
  const [formData, setFormData] = useState(initialFormData);

  const handleToggle = () => {
    setIsLogin((prevState) => !prevState); // Toggle between Login and Register
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      console.log('Form Data Updated:', updatedData); // Log the updated form data
      return updatedData; // Return the updated state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Submitted:', formData); // Log form data when submitted

    if (isLogin) {
      console.log('Login form submitted:', formData); // Log login form data
      // Add login logic here (e.g., API call to authenticate)
    } else {
      console.log('Register form submitted:', formData); // Log register form data
      // Add registration logic here (e.g., API call to create a new user)
    }

    // Reset form fields after submission
    setFormData(initialFormData); // Reset the form data to initial values
  };

  return (
    <div className='mt-24'>
      <div className="container mx-auto p-8">
        <div className="form-container max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-center text-2xl font-bold mb-4">
            {isLogin ? 'Login' : 'Register'} {/* Switch the form header */}
          </h2>

          <form onSubmit={handleSubmit}> {/* Add onSubmit to handle form submission */}
            {isLogin ? (
              // Login Form
              <>
                <label className="block mb-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                    value={formData.email} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <label className="block mb-4">
                  Password:
                  <input
                    type="password"
                    name="password"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your password"
                    value={formData.password} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                  Login
                </button>
              </>
            ) : (
              // Register Form
              <>
                <label className="block mb-2">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your first name"
                    value={formData.firstName} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <label className="block mb-2">
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your last name"
                    value={formData.lastName} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <label className="block mb-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                    value={formData.email} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <label className="block mb-2">
                  Password:
                  <input
                    type="password"
                    name="password"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your password"
                    value={formData.password} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <label className="block mb-4">
                  Confirm Password:
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full p-2 border rounded"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword} // Bind value to formData
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
                  Register
                </button>
              </>
            )}
          </form>

          <div className="text-center mt-4">
            <button
              onClick={handleToggle}
              className="text-green-500 underline"
            >
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
          </div>
          <div className="text-center mt-4">
            <Link to="/" className="text-green-500 underline">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
