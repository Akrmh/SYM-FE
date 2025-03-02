// src/pages/AdminDashboard.jsx
import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold">Welcome to Admin Dashboard</h1>
        <p className="mt-4">Here you can manage students, teachers, and more.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
