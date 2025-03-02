// src/pages/Student/ViewPerformance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewPerformance = () => {
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    axios
      .get('/api/performance/student', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => setPerformance(response.data))
      .catch(() => toast.error('Failed to fetch performance'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">My Performance</h2>
      <div className="mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {performance.map((record) => (
              <tr key={record._id}>
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

export default ViewPerformance;
