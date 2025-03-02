import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/attendance', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((response) => setAttendanceData(response.data))
      .catch(() => toast.error('Failed to fetch attendance records'));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold text-primary">Attendance Records</h2>
      <div className="mt-5">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="p-2">Student Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record) => (
              <tr key={record._id} className="border-b">
                <td className="p-2">{record.studentName}</td>
                <td className="p-2">{new Date(record.date).toLocaleDateString()}</td>
                <td className={`p-2 ${record.status === 'Present' ? 'text-green-500' : 'text-red-500'}`}>
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAttendance;
