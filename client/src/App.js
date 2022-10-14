













import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import MovieList from "./MovieList";
import NewMovie from "./NewMovie";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <MovieList/>
      <main>
        <Switch>
          <Route path="/movies">
            <NewMovie user={user} />
          </Route>
          <Route path="/movies">
            <MovieList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
