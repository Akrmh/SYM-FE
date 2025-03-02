import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewStudentPerformance = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/performance/all', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => setPerformanceData(response.data))
      .catch(() => toast.error('Failed to fetch student performance records'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold text-primary">Student Performance</h2>
      <div className="mt-5">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="p-2">Student Name</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((record) => (
              <tr key={record._id} className="border-b">
                <td className="p-2">{record.studentName}</td>
                <td className="p-2">{record.subject}</td>
                <td className="p-2 text-accent">{record.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudentPerformance;
