// src/pages/Admin/ManageStudents.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    degree: '',
    nationality: ''
  });

  useEffect(() => {
    // Fetch students data on component mount
    axios
      .get('/api/students', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setStudents(response.data))
      .catch(error => toast.error('Failed to fetch students'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/students', newStudent, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => {
        setStudents([...students, response.data]);
        toast.success('Student added successfully');
      })
      .catch(error => toast.error('Failed to add student'));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Manage Students</h2>
      <form onSubmit={handleSubmit} className="mt-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newStudent.degree}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          value={newStudent.nationality}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 mb-3"
        />
        <button type="submit" className="bg-blue-600 text-white p-2">Add Student</button>
      </form>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Students List</h3>
        <table className="table-auto w-full mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Degree</th>
              <th>Nationality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.degree}</td>
                <td>{student.nationality}</td>
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

export default ManageStudents;
