import React from "react";

function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0  text-white p-4 flex justify-around md:hidden">
      <button>Home</button>
      <button>Categories</button>
      <button>Search</button>
    </nav>
  );
}

export default MobileNavbar;
