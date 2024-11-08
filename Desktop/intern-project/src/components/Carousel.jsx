import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Image imports
const one = "./one.avif";
const two = "./two.avif";
const three = "./three.avif";

const Carousels = () => {
  const images = [one, two, three];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for next and previous navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex justify-center items-center mb-8">
      <div className="relative w-4/5 overflow-hidden py-2 ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full px-4">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-48 rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Previous and Next buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousels;
