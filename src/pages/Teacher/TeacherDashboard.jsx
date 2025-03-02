// src/pages/TeacherDashboard.jsx
import React from 'react';
import Sidebar from '../../components/Teacher/Sidebar';

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold">Welcome to Teacher Dashboard</h1>
        <p className="mt-4">You can track student attendance and performance here.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;
