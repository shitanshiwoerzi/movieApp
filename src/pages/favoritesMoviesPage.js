import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorite = context.movies.filter( m => m.favorite )

  return (
    <MovieListPageTemplate
      movies={favorite}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;