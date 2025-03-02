// src/pages/StudentDashboard.jsx
import React from 'react';
import Sidebar from '../../components/Student/Sidebar';

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold">Welcome to Student Dashboard</h1>
        <p className="mt-4">You can view your attendance and performance here.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
