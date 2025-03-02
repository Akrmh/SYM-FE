import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Mail, Eye, EyeOff } from 'lucide-react'; // Importing icons from lucide-react

const logo = "../../src/assets/Alight_Logo.svg"; // Fix the logo path

const API_BASE_URL = "http://localhost:5000/api"; // Update with your backend URL

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      sessionStorage.setItem("token", data.token);
      toast.success("Login successful");
      navigate("/student/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
        <div className="max-w-sm w-full text-center">
          <div className="mb-8">
            <img src={`${logo}`} alt="Logo" className="w-16 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6"> Please enter your details.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col gap-3">
              <label className="ml-1 mr-auto" htmlFor="email">Email:</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-white dark:bg-gray-800 pr-10" // Adjust padding for icon
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="ml-1 mr-auto" htmlFor="password">Password:</label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-white dark:bg-gray-800 pl-10 pr-10" // Adjust padding for icon
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <a href="/forgot" className="text-primary">Forgot your password?</a>
            </p>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      
      {/* Right Section (hidden on mobile) */}
      <div className="hidden md:block w-1/2 bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center text-white p-10">
      </div>
    </div>
  );
};

export default Login;
