






import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.id}>
            
              <h2>{movie.name}</h2>
              <p>
                <em>Actor: {movie.lead_actor} </em>
                &nbsp;·&nbsp;
                <cite>Directed By: {movie.director}</cite>
              </p>
              <img alt = "movieposter" src = {movie.movie_poster}></img>
            
          </li>
        ))
      ) : (
        <>
          <h2>No Movies Found</h2>
          <button as={Link} to="/movies">
            Add a movie
          </button>
        </>
      )}
    </>
  );
}


export default MovieList;
