//pages/Home/homepage.jsx

import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/http";
import MovieList from "../MovieList/movie-list";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";

const HomePageComponent = () => {
  const [loading, setLoading] = useState(false);

  const [movieList, setMovieList] = useState(
 []
);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await fetchData(`discover/movie`);
        setMovieList(response.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching movie details:", error);
      }
    };

fetchAllMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.rootContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>CINEMA QUEST</h1>
        <Link to="/favorites" className={styles.favoritesButton}>
          View Favorites
        </Link>
        <MovieList movies={movieList} />
      </div>
    </div>
  );
};

export default HomePageComponent;
