import React from "react";

const contentStyle = {
  textAlign: 'center',
  height: '250px',
  margin:'10px'
}
export default ({ person,creadits }) => {
  console.log(creadits);
    return (
      <>
      {creadits ? (
        <>
       <h4>Biography</h4>
      <p>{person.biography}</p>
      <br></br>
      <h4>Known for</h4>

      <img style={contentStyle}
            alt={creadits.cast[0].name}
            src={
              creadits.cast[0].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[0].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[1].name}
            src={
              creadits.cast[1].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[1].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[2].name}
            src={
              creadits.cast[2].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[2].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[3].name}
            src={
              creadits.cast[3].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[3].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[4].name}
            src={
              creadits.cast[4].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[4].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[5].name}
            src={
              creadits.cast[5].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[5].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[6].name}
            src={
              creadits.cast[6].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[6].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[7].name}
            src={
              creadits.cast[7].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[7].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[8].name}
            src={
              creadits.cast[8].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[8].poster_path}`
                : "./film-poster-placeholder.png"
            }
      />
      <img style={contentStyle}
            alt={creadits.cast[9].name}
            src={
              creadits.cast[9].poster_path
                ? `https://image.tmdb.org/t/p/w500/${creadits.cast[9].poster_path}`
                : "./film-poster-placeholder.png"
            }
            
      />
      </>
      ) : (
      <p>Waiting for movie details</p>
    )}
      </>
    );
};