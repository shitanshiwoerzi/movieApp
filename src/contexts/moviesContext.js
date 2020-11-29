import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getNowplaying, getToprated, getUpcoming} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying: [...state.nowplaying],
        toprated: [...state.toprated]
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        nowplaying:state.nowplaying.map((m) =>
        m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
      ),
      toprated:state.toprated.map((m) =>
      m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
    )
      };

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming],  nowplaying:[...state.nowplaying], toprated:[...state.toprated]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies],  nowplaying:[...state.nowplaying], toprated:[...state.toprated]};
    case "load-nowplaying":
      return{ nowplaying: action.payload.movies, upcoming:[...state.upcoming], movies:[...state.movies], toprated:[...state.toprated]};
    case "load-toprated":
      return{ toprated:action.payload.movies, upcoming:[...state.upcoming], movies:[...state.movies], nowplaying:[...state.nowplaying]};
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],

        nowplaying: [...state.nowplaying],
        toprated: [...state.toprated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {movies: [], upcoming: [] ,  nowplaying: [] , toprated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    const index1 = state.nowplaying.map((m) => m.id).indexOf(movieId);
    const index2 = state.toprated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index], movie: state.nowplaying[index1], movie: state.toprated[index2]}});
  };
  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcoming().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    getNowplaying().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    getToprated().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying: state.nowplaying,
        toprated: state.toprated,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList:addToWatchList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;