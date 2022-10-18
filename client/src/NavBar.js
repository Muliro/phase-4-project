





import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
      <Typography>
        Binge Bucket
      </Typography>
      <nav>
        <Button as={Link} to="/new">
          New Movie
        </Button>
        <Button  onClick={handleLogoutClick}>
          Logout
        </Button>
      </nav>
      </AppBar>
      </Box>
    </>
  );
}



export default NavBar;
