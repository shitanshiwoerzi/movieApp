import React, { useContext } from "react";
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatch'
import PersonCard from "../components/personCard";

const PersonPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });
    return (
        <PersonCard
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchListButton movie={movie} /> 
          }}
        />
    );
  };
export default PersonPage;