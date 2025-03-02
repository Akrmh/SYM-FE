// src/pages/Admin/ManageTeachers.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    email: '',
    subject: ''
  });

  useEffect(() => {
    // Fetch teachers data on component mount
    axios
      .get('/api/teachers', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setTeachers(response.data))
      .catch(error => toast.error('Failed to fetch teachers'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/teachers', newTeacher, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setTeachers([...teachers, response.data]);
        toast.success('Teacher added successfully');
      })
      .catch(error => toast.error('Failed to add teacher'));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Manage Teachers</h2>
      <form onSubmit={handleSubmit} className="mt-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newTeacher.name}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newTeacher.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newTeacher.subject}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <button type="submit" className="bg-blue-600 text-white p-2">Add Teacher</button>
      </form>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Teachers List</h3>
        <table className="table-auto w-full mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher._id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.subject}</td>
                <td>
                  {/* Implement Update and Delete functionality here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeachers;
