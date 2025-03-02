import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../components/Home/HomeNavbar';
import '../components/Home/home.css'; // Import custom styles

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Images */}
        <div className="absolute inset-0 bg-image-slideshow"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white p-8 rounded-lg shadow-xl bg-gradient-to-r from-primary to-secondary bg-opacity-80">
          <h1 className="text-4xl font-bold mb-6">Welcome to Alight Coding School</h1>
          <p className="text-lg mb-4">
            Manage students, teachers, and your school operations with ease.
          </p>
          <p className="text-sm mb-8">Get started by logging in or signing up!</p>
          <div className="flex justify-center gap-6">
            <Link to="/login">
              <button className="bg-accent text-white py-2 px-6 rounded-lg shadow-md hover:bg-accent-dark transition">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-primary py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
