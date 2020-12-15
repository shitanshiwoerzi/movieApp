import React, {useContext } from "react";
import "./filterControls.css";
import { GenresContext } from "../../contexts/genresContext";

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  }
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value)
  };

  return (
      <div className="row ">
        <div className="col-md-12">
          <h4>
            <span className="span filter_panel card">List Filtering:</span>
            <input
              type="text"
              placeholder="Title Search"
              onChange={handleTextChange}
            />
            <span className="span filter_panel card">Genre:</span>
          <select defaultValue="genre" id="genre" onChange={handleGenreChange}>
              {context.genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
          </select>
         </h4>
        </div>
      </div>
  );
}

export default FilterControls;