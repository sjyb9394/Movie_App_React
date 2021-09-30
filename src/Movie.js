import React from 'react';

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__date">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{genres.map(genre=><li className="genre_genre">{genre}</li>)}</ul>
                <p className="movie_summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    )
}

export default Movie;