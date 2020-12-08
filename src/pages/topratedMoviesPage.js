import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton3 from '../components/buttons/addToWatch3'

const TopratedMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("watchlist" in m);
  });
    return (
        <PageTemplate
          title='Top-rated Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchListButton3 movie={movie} /> 
          }}
        />
    );
  };
export default TopratedMoviePage;