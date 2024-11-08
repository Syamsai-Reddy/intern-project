// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Navbar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-[#1f1f1f] text-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                {/* <img
                    src="/path/to/logo.png"
                    alt="BookMyShow Logo"
                    className="h-8 w-auto"
                /> */}
                <h1 className="text-2xl font-bold">BookMyShow</h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-1 w-1/3 max-w-md">
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
                <button className="text-sm font-medium hover:underline">
                    Sign In
                </button>
                <button className="text-sm font-medium hover:underline">
                    Download App
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
