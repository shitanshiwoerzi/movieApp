import React from "react";
import "./personCard.css";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";
import {Card} from 'antd';

const PersonCard = ({person}) =>{
    return (
        <div className="col-sm-3">
        <div className="card ">
          
            <Card cover={
              <Link to= {`/person/${person.id}`}>
          <img
            className="card-img-tag center "
            alt={person.name}
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
          /> </Link>} >
            <div className="card-body">
            <h4 className="card-title ">{person.name}</h4>
          <p className="p sub">{person.known_for[0].title},{person.known_for[1].title}</p>
          </div>
          </Card>
          
          
        </div>
      </div>
    );
};

export default PersonCard ;