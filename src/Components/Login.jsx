import { useState } from "react";
import { Link } from "react-router-dom";
// import { supabase } from "../supabase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../supabaseClient";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // LOGIN LOGIC
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;
        toast.success("Login successful!");
        // console.log("Logged in user:", user);
        // Store user session in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("session", JSON.stringify(data.session));
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        // REGISTER LOGIC
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              firstName: formData.firstName,
              lastName: formData.lastName,
            },
          },
        });

        if (error) throw error;
        toast.success(
          "Registration successful! Check your email for verification."
        );
        // console.log("Registered user:", user);
        // Store user session in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("session", JSON.stringify(data.session));
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }

      // setFormData(initialFormData);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-24">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto p-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-center text-2xl font-bold mb-4">
            {isLogin ? "Login" : "Register"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label className="block mb-2">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your first name"
                    value={formData.firstName}
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
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}
            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {!isLogin && (
              <label className="block mb-4">
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 border rounded"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
            )}
            <button
              type="submit"
              className="w-full p-2 bg-green-500 text-white rounded"
              disabled={loading}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </button>
          </form>
          {/* Login form */}
          <div className="text-center mt-4">
            <button onClick={handleToggle} className="text-green-500 underline">
              {isLogin
                ? "Don't have an account? Register"
                : "Already have an account? Login"}
            </button>
          </div>
          <div className="text-center mt-4">
            <Link to="/reset-password" className="text-green-500 underline">
              Forgot Password? Reset here
            </Link>
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
