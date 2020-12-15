import React from "react";
import PersonHeader from '../headerPerson'
import {Image} from "antd";

const TemplatePersonPage = ({ person, children }) => {
    return (
      <>
       <PersonHeader person={person} />
      <div className="row">
        <div className="col-3">
          <Image
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./film-poster-placeholder.png"
            }
            alt={person.name}
          />
          <section>
            <h3><bdi>Personal Info</bdi></h3>
            <section>
              <p><strong><bdi>Known For</bdi></strong><br></br>{person.known_for_department}</p>
              <p><strong><bdi>Popularity</bdi></strong><br></br>{person.popularity}</p>
              <p>
                <strong><bdi>Birthday</bdi></strong>
                <br></br>
                {person.birthday}
              </p>  
              <p><strong><bdi>Place of Birth</bdi></strong><br></br>{person.place_of_birth}</p>
          <p><strong><bdi>Also Known As</bdi></strong><br></br><ul>{person.also_known_as.map((n)=><li>{n}</li>)}</ul>
          </p>
            </section>
          </section>
          </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePersonPage;