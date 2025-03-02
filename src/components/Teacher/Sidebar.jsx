import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  User, 
  Book, 
  FileText, 
  CheckSquare, 
  Calendar, 
  Library, 
  Megaphone, 
  Clock 
} from 'lucide-react';

const menuItems = [
  { name: "Dashboard", path: "/teacher/dashboard", icon: LayoutDashboard },
  { name: "Classes", path: "/teacher/classes", icon: Users },
  { name: "Students", path: "/teacher/students", icon: User },
  { name: "Assignments", path: "/teacher/assignments", icon: Book },
  { name: "Exams", path: "/teacher/exams", icon: FileText },
  { name: "Performance", path: "/teacher/performance", icon: CheckSquare },
  { name: "Attendance", path: "/teacher/attendance", icon: Clock },
  { name: "Library", path: "/teacher/library", icon: Library },
  { name: "Announcements", path: "/teacher/announcements", icon: Megaphone },
  { name: "Events & Calendar", path: "/teacher/events-calendar", icon: Calendar },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-white h-screen p-5 font-display">
      <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>
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
