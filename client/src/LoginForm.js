






import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      
        <p>Username</p>
        <TextField
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
      
        <p>Password</p>
        <TextField
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      
        <Button  type="submit" variant = "contained">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>

    </form>
   
  );
}

export default LoginForm;
