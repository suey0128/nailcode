import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';

  
  function NavBar({currentUser,onLogout}) {

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