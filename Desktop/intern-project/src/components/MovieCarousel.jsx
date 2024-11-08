// src/components/MovieCarousel.jsx
import React, { useState } from "react";

function MovieCarousel({ movies }) {
    const visibleCards = 5; // Number of cards visible at once
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
        );
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>

            {/* Carousel Wrapper */}
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-300"
                    style={{
                        transform: `translateX(-${
                            (currentIndex % movies.length) *
                            (100 / visibleCards)
                        }%)`,
                        width: `${(movies.length / visibleCards) * 100}%`,
                    }}
                >
                    {/* Duplicate the movie list to create a seamless circular view */}
                    {[...movies, ...movies].map((movie, index) => (
                        <div
                            key={`${movie.imdbID}-${index}`}
                            className="w-52 p-1 flex-shrink-0" // Adjusted to fit 5 items in a row
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Increased height of image */}
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="w-full object-cover" // Full width with adjusted height
                                    style={{ height: "300px" }} // Set image height for desktop
                                />
                                <div className="p-2">
                                    <h3 className="text-sm font-bold">
                                        {movie.Title}
                                    </h3>
                                    <p className="text-gray-600 text-xs mb-1">
                                        {movie.Year}
                                    </p>

                                    {/* Display Ratings, Genre, Votes */}
                                    <div className="flex items-center space-x-1 mb-1">
                                        <span className="text-red-500 font-bold text-xs">
                                            ⭐ {movie.imdbRating || "N/A"}/10
                                        </span>
                                        <span className="text-gray-600 text-xs">
                                            • {movie.Genre || "Genre"}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-xs">
                                        {movie.Votes || "0"} Votes
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prev Button */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &#10094; {/* Left Arrow */}
            </button>

            {/* Next Button */}
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                &#10095; {/* Right Arrow */}
            </button>
        </div>
    );
}

export default MovieCarousel;
