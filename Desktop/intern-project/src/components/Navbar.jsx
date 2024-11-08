// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
const logo = "./lo.png";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="BookMyShow Logo" className="h-8 w-28" />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-200 rounded-full px-4 py-1 w-1/3 max-w-md">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full bg-transparent outline-none text-black placeholder-gray-500"
          placeholder="Search for movies, events, plays, and more..."
        />
      </div>

      {/* User/Account Section */}
      <div className="flex items-center space-x-4">
        <div className="flex lg:space-x-4 items-center">
          {/* Move Sign In Button to the right on smaller screens */}
          <button className="bg-red-500 p-2 rounded-md text-white md:mr-0 mr-auto">
            Sign In
          </button>
          <button className="text-black hidden lg:block">
            <IoMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
