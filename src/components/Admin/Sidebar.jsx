import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users, 
  GraduationCap, 
  ClipboardList, 
  FileText, 
  BarChart, 
  CheckSquare, 
  Library, 
  Megaphone, 
  Calendar 
} from 'lucide-react';

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Classes", path: "/admin/classes", icon: GraduationCap },
  { name: "Students", path: "/admin/students", icon: Users },
  { name: "Teachers", path: "/admin/teachers", icon: Users },
  { name: "Assignments", path: "/admin/assignments", icon: ClipboardList },
  { name: "Exams", path: "/admin/exams", icon: FileText },
  { name: "Performance", path: "/admin/performance", icon: BarChart },
  { name: "Attendance", path: "/admin/attendance", icon: CheckSquare },
  { name: "Library", path: "/admin/library", icon: Library },
  { name: "Announcements", path: "/admin/announcements", icon: Megaphone },
  { name: "Events & Calendar", path: "/admin/events-calendar", icon: Calendar },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary text-white h-screen p-5 font-display">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
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
