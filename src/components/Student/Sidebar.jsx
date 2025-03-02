import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  ClipboardList, 
  BarChart, 
  CalendarCheck, 
  BookOpen, 
  Calendar, 
  Megaphone, 
  User 
} from 'lucide-react';

const menuItems = [
  { name: "Dashboard", path: "/student/dashboard", icon: LayoutDashboard },
  { name: "Assignments", path: "/student/assignments", icon: FileText },
  { name: "Exams", path: "/student/exams", icon: ClipboardList },
  { name: "Performance", path: "/student/performance", icon: BarChart },
  { name: "Attendance", path: "/student/attendance", icon: CalendarCheck },
  { name: "Library", path: "/student/library", icon: BookOpen },
  { name: "Announcements", path: "/student/announcements", icon: Megaphone },
  { name: "Profile", path: "/student/profile", icon: User },
  { name: "Events & Calendar", path: "/student/events-calendar", icon: Calendar },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-white h-screen p-5 font-display">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
      <ul>
        {menuItems.map(({ name, path, icon: Icon }) => (
          <li key={name}>
            <Link to={path} className="flex items-center gap-2 p-2 hover:bg-secondary rounded-md transition">
              <Icon size={20} /> {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
