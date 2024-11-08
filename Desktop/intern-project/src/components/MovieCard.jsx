// src/components/MovieCard.jsx
import React from "react";

function MovieCard({ movie }) {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="h-48 w-full object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    );
}

export default MovieCard;
