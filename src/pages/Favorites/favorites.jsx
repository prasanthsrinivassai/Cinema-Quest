//pages/Favorites/favorites.jsx
import React, { useEffect, useState } from "react";
import { getFavoriteMovies } from "../../utils/localStorage";
import MovieList from "../MovieList/movie-list";
import styles from "./favorites.module.css";

const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = getFavoriteMovies();
    setFavoriteMovies(favorites);
  }, []);

  return (
    <div className={styles.rootContainer}>
      <h1 className={styles.title}>Your Favorite Movies</h1>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} />
      ) : (
        <p>No favorite movies found.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
