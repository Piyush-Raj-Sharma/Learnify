import React from "react";
import { assets } from "./../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./../theme/ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 
        py-4 border-b 
        ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"} 
        border-gray-500 dark:border-white 
        dark:bg-gray-900 dark:text-white`}
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white">
        <button className="hover:underline">Become Educator</button>
        <NavLink to="/my-enrollments" className="hover:underline">
          My Enrollments
        </NavLink>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Create Account
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 text-gray-700 dark:text-white">
        <button className="hover:underline text-sm sm:text-base">
          Become Educator
        </button>
        <NavLink to="/my-enrollments" className="hover:underline text-sm sm:text-base">
          My Enrollments
        </NavLink>
        <button>
          <img
            src={assets.user_icon}
            alt="User"
            className="w-6 h-6 object-contain"
          />
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
