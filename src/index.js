import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from './pages/upcomingMoviesPage'
import NowplayingMoviePage from './pages/nowplayingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopratedMoviePage from './pages/topratedMoviesPage';
import PersonPage from './pages/personPage';
import LoginPage from './pages/loginPage';
import "./index.css";
import PeopleContextProvider from "./contexts/peopleContext";


const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider>
        <PeopleContextProvider>
          <Switch>
            <Route path="/login" component={LoginPage} />  
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviePage} />
            <Route path="/movies/now-playing" component={NowplayingMoviePage} />
            <Route path="/movies/top-rated" component={TopratedMoviePage} />
            <Route path="/person" component={PersonPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            
          </Switch>
          <Redirect from="*" to="/" />
          </PeopleContextProvider>
          </GenresContextProvider> 
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};
  ReactDOM.render(<App/>,document.getElementById("root"));