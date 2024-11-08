// // src/components/CategoryBar.jsx
// import React from "react";

// function CategoryBar({ onSelectCategory }) {
//     const categories = ["Movies", "Stream", "Events", "Sports", "Plays"];

//     return (
//         <div className="flex space-x-4 p-4 bg-gray-200">
//             {categories.map((category, index) => (
//                 <button
//                     key={index}
//                     onClick={() => onSelectCategory(category)}
//                     className="p-2 rounded bg-gray-800 text-white"
//                 >
//                     {category}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default CategoryBar;

// src/components/CategoryBar.jsx
import React from "react";

function CategoryBar({ onSelectCategory }) {
  const categories = ["Movies", "Stream", "Events", "Sports", "Plays"];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-200">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category)}
          className="p-2 whitespace-nowrap rounded  text-black"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
