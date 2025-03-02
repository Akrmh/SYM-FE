// src/pages/Teacher/ViewAllStudentsPerformance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewAllStudentsPerformance = () => {
  const [studentsPerformance, setStudentsPerformance] = useState([]);

  useEffect(() => {
    axios
      .get('/api/performance/all', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => setStudentsPerformance(response.data))
      .catch(() => toast.error('Failed to fetch performance data'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">All Students' Performance</h2>
      <div className="mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentsPerformance.map((record) => (
              <tr key={record._id}>
                <td>{record.studentName}</td>
                <td>{record.subject}</td>
                <td>{record.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllStudentsPerformance;
