import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton2 from '../components/buttons/addToWatch2'

const NowplayingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("watchlist" in m);
  });
    return (
        <PageTemplate
          title='Now-playing Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchListButton2 movie={movie} /> 
          }}
        />
    );
  };
export default NowplayingMoviePage;