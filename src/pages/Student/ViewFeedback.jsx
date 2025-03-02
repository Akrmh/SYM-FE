// src/pages/Student/ViewFeedback.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get('/api/feedback/student', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then((response) => setFeedback(response.data))
      .catch(() => toast.error('Failed to fetch feedback'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">My Feedback</h2>
      <div className="mt-5">
        <ul>
          {feedback.map((item) => (
            <li key={item._id} className="p-2 border-b border-gray-300">
              <strong>{item.teacherName}:</strong> {item.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewFeedback;
