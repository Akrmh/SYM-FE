// src/pages/Teacher/StudentAttendance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const StudentAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get('/api/students', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setStudents(response.data))
      .catch(error => toast.error('Failed to fetch students'));
  }, []);

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [studentId]: status
    }));
  };

  const submitAttendance = () => {
    axios
      .post('/api/attendance', { attendance }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(() => toast.success('Attendance submitted successfully'))
      .catch(() => toast.error('Failed to submit attendance'));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Mark Student Attendance</h2>
      <div className="mt-5">
        {students.map(student => (
          <div key={student._id} className="flex justify-between items-center">
            <span>{student.name}</span>
            <select
              value={attendance[student._id] || ''}
              onChange={(e) => handleAttendanceChange(student._id, e.target.value)}
              className="p-2 border border-gray-300"
            >
              <option value="">Select</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
        ))}
      </div>
      <button
        onClick={submitAttendance}
        className="mt-5 bg-blue-600 text-white p-2"
      >
        Submit Attendance
      </button>
    </div>
  );
};

export default StudentAttendance;
