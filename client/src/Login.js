






import { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button';


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1>Binge Bucket</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          
          <p>
            Don't have an account? &nbsp;
            <Button type = "submit" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <Button type = "submit" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </>
  );
}







export default Login;
