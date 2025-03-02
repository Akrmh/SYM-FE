// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Forgot from './pages/Forgot.jsx';

import Dashboard from './pages/Admin/AdminDashboard.jsx';
import ManageTeachers from './pages/Admin/ManageTeachers.jsx';
import ManageStudents from './pages/Admin/ManageStudents.jsx';
import ViewStudentPerformance from './pages/Admin/ViewStudentPerformance.jsx';
import ViewAttendance from './pages/Admin/ViewAttendance.jsx';
import Classes from './pages/Admin/Classes.jsx'
import Assignments from './pages/Admin/Assignments.jsx'
import Announcements from './pages/Admin/Announcements.jsx'
import EventsCalendar from './pages/Admin/EventsCalendar.jsx'
import Library from './pages/Admin/Library.jsx'
import Exams from './pages/Admin/Exams.jsx'

import TeacherDashboard from './pages/Teacher/TeacherDashboard.jsx';
import PerformanceTracking from './pages/Teacher/PerformanceTracking.jsx';
import StudentAttendance from './pages/Teacher/StudentAttendance.jsx';
import ViewAllStudentsPerformance from './pages/Teacher/ViewAllStudentsPerformance.jsx';
import TeacherClasses from './pages/Teacher/TeacherClasses.jsx'
import TeacherAssignments from './pages/Teacher/TeacherAssignments.jsx'
import TeacherAnnouncements from './pages/Teacher/TeacherAnnouncements.jsx'
import TeacherEventsCalendar from './pages/Teacher/TeacherEventsCalendar.jsx'
import TeacherLibrary from './pages/Teacher/TeacherLibrary.jsx'
import TeacherExams from './pages/Teacher/TeacherExams.jsx'

import ViewFeedback from './pages/Student/ViewFeedback.jsx';
import ViewPerformance from './pages/Student/ViewPerformance.jsx';
import StudentDashboard from './pages/Student/StudentDashboard.jsx';
import StudentAnnouncements from './pages/Student/StudentAnnouncements.jsx';
import StudentAssignments from './pages/Student/StudentAssignments.jsx';
import StudentEventsCalendar from './pages/Student/StudentEventsCalendar.jsx';
import StudentExams from './pages/Student/StudentExams.jsx';
import StudentLibrary from './pages/Student/StudentLibrary.jsx';
import StudentProfile from './pages/Student/StudentProfile.jsx';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />

         {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/teachers" element={<ManageTeachers />} />
        <Route path="/admin/students" element={<ManageStudents />} />
        <Route path="/admin/attendance" element={<ViewAttendance />} />
        <Route path="/admin/performance" element={<ViewStudentPerformance />} />
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/assignments" element={<Assignments />} />
        <Route path="/admin/announcements" element={<Announcements />} />
        <Route path="/admin/events-calendar" element={<EventsCalendar />} />
        <Route path="/admin/library" element={<Library />} />
        <Route path="/admin/exams" element={<Exams />} />


        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/performanceTracking" element={<PerformanceTracking />} />
        <Route path="/teacher/students" element={<StudentAttendance />} />
        <Route path="/teacher/performance" element={<ViewAllStudentsPerformance />} />
        <Route path="/teacher/attendance" element={<StudentAttendance />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />
        <Route path="/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/teacher/announcements" element={<TeacherAnnouncements />} />
        <Route path="/teacher/library" element={<TeacherLibrary />} />
        <Route path="/teacher/events-calendar" element={<TeacherEventsCalendar />} />
        <Route path="/teacher/exams" element={<TeacherExams />} />


        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/attendance" element={<ViewAttendance />} />
        <Route path="/student/feedback" element={<ViewFeedback />} />
        <Route path="/student/performance" element={<ViewPerformance />} />
        <Route path="/student/announcements" element={<StudentAnnouncements />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/events-calendar" element={<StudentEventsCalendar />} />
        <Route path="/student/exams" element={<StudentExams />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/library" element={<StudentLibrary />} />

      </Routes>
    </Router>
  );
};

export default App;
