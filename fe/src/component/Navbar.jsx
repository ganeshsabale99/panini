import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icons if using Lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-tight">
          <Link to="/">BlogVerse</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link to="/home" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/create" className="hover:text-yellow-300 transition">Create Blog</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-gray-800 px-4 py-2 space-y-2 shadow-md">
          <li>
            <Link to="/home" onClick={toggleMenu} className="block hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/create" onClick={toggleMenu} className="block hover:text-blue-600">Create Blog</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu} className="block hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/profile" onClick={toggleMenu} className="block hover:text-blue-600">Profile</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
