import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageComponent from "./pages/Home/homepage";
import MovieDetails from "./pages/MovieDetails/movie-details";
import FavoritesPage from "./pages/Favorites/favorites"; // New Page for Favorites

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page displaying movie list */}
        <Route path="/" element={<HomePageComponent />} />
        {/* Movie details page */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* Favorites page */}
        <Route path="/favorites" element={<FavoritesPage />} />{" "}
        {/* New Route for Favorites */}
      </Routes>
    </Router>
  );
};

export default App;
