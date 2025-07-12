import React from "react";
import { assets } from "./../../assets/assets";
import { NavLink } from "react-router-dom";
import ThemeToggle from './../theme/ThemeToggle';

const Navbar = () => {
  return (
    <div>
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg-w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500 dark:bg-gray-900 dark:text-white">
        <div>
          <button>Become Educator</button>
          <NavLink to="/my-enrollments">My Enrollments</NavLink>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Create Account
        </button>
        <ThemeToggle/>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
