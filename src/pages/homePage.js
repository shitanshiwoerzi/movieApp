import React from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";

const MovieListPage = (props) => {
    const movies = props.movies;
  return (
    <div>
      <Header numMovies={movies.length} />
      <FilterControls />
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieListPage;