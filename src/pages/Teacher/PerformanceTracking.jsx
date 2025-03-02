// src/pages/Teacher/PerformanceTracking.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PerformanceTracking = () => {
  const [students, setStudents] = useState([]);
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    axios
      .get('/api/students', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => setStudents(response.data))
      .catch(() => toast.error('Failed to fetch students'));
  }, []);

  const handleGradeChange = (studentId, grade) => {
    setPerformanceData((prevData) => ({
      ...prevData,
      [studentId]: { ...prevData[studentId], grade },
    }));
  };

  const handleSubmitPerformance = () => {
    axios
      .post(
        '/api/performance',
        performanceData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      .then(() => toast.success('Performance updated successfully'))
      .catch(() => toast.error('Failed to update performance'));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Performance Tracking</h2>
      <div className="mt-5">
        {students.map((student) => (
          <div key={student._id} className="flex justify-between items-center">
            <span>{student.name}</span>
            <input
              type="number"
              min="0"
              max="100"
              value={performanceData[student._id]?.grade || ''}
              onChange={(e) => handleGradeChange(student._id, e.target.value)}
              placeholder="Grade"
              className="p-2 border border-gray-300"
            />
          </div>
        ))}
      </div>
      <button onClick={handleSubmitPerformance} className="mt-5 bg-blue-600 text-white p-2">
        Submit Performance
      </button>
    </div>
  );
};

export default PerformanceTracking;
