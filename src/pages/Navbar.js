import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-400 to-orange-400 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-extrabold">
          <Link to="/" className="hover:underline">
            ✨ Reminder Invitation
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-peach-200 transition duration-200 text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-peach-200 transition duration-200 text-lg font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/edit/new"  // Assuming this path will lead to the "Create Reminder" page
              className="hover:text-peach-200 transition duration-200 text-lg font-medium"
            >
              Create Reminder
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
