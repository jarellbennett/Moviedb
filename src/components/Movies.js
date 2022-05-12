import React from 'react'

const IMG_API = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=4e7fdbfdfbc064af21f53bb10550c58b&language=en-US"
    
const Movies = ({title, poster_path, overview, vote_average}) =>  (
    <div className = "movie">
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Synopsis</h2>
            <p>{overview}</p>
        </div>
    </div>
    );

export default Movies;