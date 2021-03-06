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
import PersonDetailsPage from './pages/personDetailsPage';
import "./index.css";
import PeopleContextProvider from "./contexts/peopleContext";
import LoginPage from "./pages/loginPage";
import { FirebaseAppProvider } from 'reactfire' ;
import firebaseConfig from './firebaseConfig' ;
import SignUp from './components/signUp'
import SignOut from './components/signOut'

const App = () => {
  return (
    < FirebaseAppProvider firebaseConfig = {firebaseConfig} >
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider>
        <PeopleContextProvider>

          <Switch>
            <Route path="/signout" component={SignOut}></Route>
            <Route path="/login" component={LoginPage} />  
            <Route path="/signup" component={SignUp} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviePage} />
            <Route path="/movies/now-playing" component={NowplayingMoviePage} />
            <Route path="/movies/top-rated" component={TopratedMoviePage} />
            <Route exact path="/people" component={PersonPage} />
            <Route path="/people/:id" component={PersonDetailsPage} />
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
  </FirebaseAppProvider>
  );
};
  ReactDOM.render(<App/>,document.getElementById("root"));