import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  function NavBar({currentUser,onLogout}) {
    const classes = useStyles();

    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => {
          onLogout()
          history.push('/')
        });
      }
      
    return (
      // <div className={classes.root}>
      //   <AppBar position="static">
      //     <Toolbar>

      //       {currentUser ? <h2>Welcome {currentUser.username}</h2> : null }

      //       <NavLink to="/">
      //       <Typography variant="h6" className={classes.title} className="welcomeback">
      //         Nail Code
      //       </Typography>
      //       </NavLink>

      //       {currentUser ? 
      //       <div>
      //         <NavLink to="/shoppingcart">
      //         <Button color="inherit">Shopping cart</Button>
      //         </NavLink>

      //         <NavLink to="/me">
      //         <Button color="inherit">Profile</Button>
      //         </NavLink> 

      //         <Button  color="inherit" onClick={handleLogout}>Logout</Button>

      //       </div> 
      //       : 
      //       <div>
      //         <NavLink to="/signup">
      //         <Button color="inherit"> Sign Up</Button>
      //         </NavLink>
              
      //         <NavLink to="/login">
      //         <Button color="inherit">Login</Button>
      //         </NavLink>
      //       </div>
      //       }
      //     </Toolbar>
      //   </AppBar>
      //   </div>

        <nav className="header">
          <div className="navbar-container">

            <div className="header-left">
              <NavLink className='logo' exact to="/" style={{ textDecoration: 'none' }}>
                NailCode
              </NavLink>
            </div>

            {currentUser ? 
              <div className="header-right">
                <NavLink to="/shoppingcart" className="nav-link" style={{ textDecoration: 'none' }} activeStyle={{fontWeight: "bold"}}>
                Shopping Cart
                </NavLink>

                <NavLink to="/me" className="nav-link" style={{ textDecoration: 'none' }} activeStyle={{fontWeight: "bold"}}>
                Profile
                </NavLink> 

                <button  className="nav-link" onClick={handleLogout}>Logout</button>

              </div> 
              : 
              <div className="header-right">
                <NavLink to="/login" className="nav-link" style={{ textDecoration: 'none' }} activeStyle={{fontWeight: "bold"}}>
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav-link" style={{ textDecoration: 'none' }} activeStyle={{fontWeight: "bold"}}>
                  Sign Up
                </NavLink>
              </div>
            }
          </div>
        </nav>
        

    );
  }
  export default NavBar;