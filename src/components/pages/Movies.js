import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/movies.css'

// import { useGlobalContext } from "./context";

function Movies() {
    // const {movies}=useGlobalContext();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=68026e07f1d9513ae3e3ddacdfe4954b&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <NavLink to={`movie/${movie.title}`}>
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>Language: {movie.original_language}</p>
            <p>Ratings: {movie.vote_average}</p>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Movies;
