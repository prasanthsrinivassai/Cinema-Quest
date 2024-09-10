// utils/localStorage.js

// Retrieve the list of favorite movies from local storage
export const getFavoriteMovies = () => {
  const favorites = localStorage.getItem("favorite_movies");
  return favorites ? JSON.parse(favorites) : [];
};

// Add a movie to the favorites list in local storage
export const addMovieToFavorites = (movie) => {
  const favorites = getFavoriteMovies();

  // Check if the movie is already in the favorites list
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);
  if (!isFavorite) {
    favorites.push(movie);
    localStorage.setItem("favorite_movies", JSON.stringify(favorites));
  }
};

// Remove a movie from the favorites list in local storage
export const removeMovieFromFavorites = (movieId) => {
  const favorites = getFavoriteMovies();
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  localStorage.setItem("favorite_movies", JSON.stringify(updatedFavorites));
};
