import React from "react";
import "./movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";
import { Rate , Card} from 'antd';

const MovieCard = ({movie,action}) =>{

    return (
        <div className="col-sm-3">
        <div className="card  bg-white">
          
           <Card cover={
             <Link to= {`/movies/${movie.id}`}>
          <img
            className="card-img-tag center "
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
          /> </Link>}
          actions={[action(movie)]}
          >
            <div className="card-body">
            <h6 className="card-title  center">{movie.title}</h6>
            <p>
              <FontAwesomeIcon icon={["fas", "calendar"]} />
              <span> {movie.release_date}</span>
            </p>
            <p>
              <Rate disabled allowHalf defaultValue={movie.vote_average/2} />
              <span> {movie.vote_average}</span>
            </p>
          </div>
          </Card> 
          
          
        </div>
      </div>
    );
};

export default MovieCard ;