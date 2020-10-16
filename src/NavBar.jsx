import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar=()=>{
    return(
    <>
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" exact to="/">Ishmam ALi Khan</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName='menu-active' className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li classNames="nav-item">
          <NavLink activeClassName='menu-active' className="nav-link" exact to="/service">Services</NavLink>
        </li>
        <li classNames="nav-item">
          <NavLink activeClassName='menu-active' className="nav-link" exact to="/about">About</NavLink>
        </li>
        <li classNames="nav-item">
          <NavLink activeClassName='menu-active' className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>
</div>
        </div>
    </div>
    </>
    )
}
export default NavBar;