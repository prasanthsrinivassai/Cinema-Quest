import React, { useState, useEffect } from "react";
import styles from "./movie-list.module.css";
import Card from "../../components/Card/card";
import { fetchData } from "../../utils/http";

const MovieList = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredMovies(movies);
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const response = await fetchData(`search/movie?query=${searchTerm}`);
        setSuggestions(response.results);
        setFilteredMovies(response.results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [searchTerm, movies]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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

      {/* Suggestions List */}
      {searchTerm && (
        <div className={styles.suggestionsContainer}>
          {isLoading ? (
            <p>Loading...</p>
          ) : suggestions.length > 0 ? (
            suggestions.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No suggestions found.</p>
          )}
        </div>
      )}

      {/* Movies Grid */}
      <div className={styles.moviesGrid}>
        {filteredMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
