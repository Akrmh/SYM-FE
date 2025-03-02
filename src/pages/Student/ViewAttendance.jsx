// src/pages/Student/ViewAttendance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get('/api/attendance/student', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(response => setAttendance(response.data))
      .catch(error => toast.error('Failed to fetch attendance'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">My Attendance</h2>
      <div className="mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map(record => (
              <tr key={record._id}>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAttendance;
