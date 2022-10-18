













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
      <main>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="http://localhost:4000/new">
            <NewMovie />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
