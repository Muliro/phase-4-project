






import { useState } from "react";
import { useHistory } from "react-router";




function NewMovie({ user }) {
  const [name, setName] = useState("new movie");
  const [lead_actor, setLead_actor] = useState("Tom Hanks");
  const [director, setDirector] = useState(`Steven Spielberg`);
  const [movie_poster, setMovie_poster] = useState("images")

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lead_actor,
        director,
        movie_poster,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      
        <h2>Create Movie</h2>
        <form onSubmit={handleSubmit}>
          
            <p>Name</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          
          
            <p>Lead Actor</p>
            <input
              type="text"
              id="lead_actor"
              value={lead_actor}
              onChange={(e) => setLead_actor(e.target.value)}
            />
          
          
            <p>Director</p>
            <input
              type = "text"
              id="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          
          
            <p >Movie Poster</p>
            <textarea
              id="movie_poster"
              rows="10"
              value={movie_poster}
              onChange={(e) => setMovie_poster(e.target.value)}
            />
          
          <p>
            <button  type="submit">
              {isLoading ? "Loading..." : "Submit Movie"}
            </button>
            </p>
          
          <ul>
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
            </ul>
          
        </form>
      
      
        <h1>{name}</h1>
        <p>
          <em>Lead Actor: {lead_actor} </em>
          &nbsp;·&nbsp;
          <cite>Directed By {director}</cite>
        </p>
        <img alt = "movieposter" src = {movie_poster}></img>
    
    </>
  );
}



export default NewMovie;
