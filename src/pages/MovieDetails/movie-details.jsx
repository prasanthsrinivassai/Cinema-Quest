//pages/MovieDetails/movie-details.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./movie-details.module.css";
import { addMovieToFavorites } from "../../utils/localStorage"; // Import utility function
import { fetchData } from "../../utils/http";

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetchData(`movie/${id}`);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleAddToFavorites = () => {
    if (movie) {
      addMovieToFavorites(movie); // Call utility function
      alert(`${movie.title} has been added to your favorites!`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <h1 className={styles.title}>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.movieInfo}>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Budget:</strong> ${movie.budget.toLocaleString()}
        </p>
        <p>
          <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </p>
      </div>
      <button className={styles.favoriteButton} onClick={handleAddToFavorites}>
        Add to Favorites
      </button>
    </div>
  );
};

export default MovieDetails;
