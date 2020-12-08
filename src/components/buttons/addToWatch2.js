import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchListButton2 = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList2(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton2;