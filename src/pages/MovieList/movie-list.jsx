import React, { useState } from "react";
import styles from "./movie-list.module.css"; // Import CSS module
import Card from "../../components/Card/card";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* Search Field */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />

      {/* Movies Grid */}
      <div className={styles.moviesGrid}>
        {filteredMovies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
