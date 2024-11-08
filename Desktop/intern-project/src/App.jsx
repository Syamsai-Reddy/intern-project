// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import Carousels from "./components/Carousel";
import MobileNavbar from "./components/MobileNavbar";
import MovieCarousel from "./components/MovieCarousel";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Avengers");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search || []));
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <CategoryBar onSelectCategory={setQuery} />

      <div className="p-4">
        <MovieCarousel movies={movies} />
      </div>
      <MobileNavbar />
      <Carousels />
    </div>
  );
}

export default App;
