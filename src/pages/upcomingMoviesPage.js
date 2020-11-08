import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcoming} from"../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addToWatch'

const UpcomingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getUpcoming().then(movies => {
        setMovies(movies);
      });

    }, []);

    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchListButton movie={movie} /> 
          }}
        />
    );
  };
export default UpcomingMoviePage;