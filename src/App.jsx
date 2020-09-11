import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Login from './Components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Front from './Components/Front'
import { Link } from 'react-router-dom';
import Register from './Components/Register';
import Logout from './Components/Logout'
import User from './Components/User';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position='static'>
          <Toolbar>
            <IconButton Color="inherit" edge="stat" aria-label="menu">
              <Menu style={{ color: "white" }} />
            </IconButton>
            <Typography variant="inherit" style={{ flexGrow: 1 }}>
              Authentication
          </Typography>
            <Link style={{ textDecoration: "none", color: "white" }} to="/register">
              <Button color="inherit">Register</Button>
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>


        <Route exact path="/" component={Front} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/api/user" component={User} />

      </BrowserRouter>
    </div>
  );
}

export default App;

