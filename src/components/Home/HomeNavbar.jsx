import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-primary p-4 font-display">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="text-xl hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="hover:text-accent transition">
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login">
              <button className="bg-accent text-white py-1 px-5 rounded-md shadow-md hover:bg-[#FFA500] transition">
                Log In
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-center bg-secondary p-4 rounded-md">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="block p-2 hover:bg-accent rounded-md transition" onClick={() => setIsOpen(false)}>
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-accent text-white py-2 px-5 rounded-md shadow-md hover:bg-[#FFA500] transition">
                Log In
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;