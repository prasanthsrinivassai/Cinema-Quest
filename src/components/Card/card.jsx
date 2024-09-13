//components\cards/card.jsx

import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
      <div key={movie.id} className={styles.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.movieImage}
        />
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <p className={styles.movieDate}>{movie.release_date}</p>
        <p className={styles.movieRating}>{movie.vote_average} / 10</p>
      </div>
    </Link>
  );
};

export default Card;
