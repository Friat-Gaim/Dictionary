import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import menu from './menu.png';
const Navbar = props => {
  return (

    <nav class="navbar navbar-expand-sm bg-light">
    <ul class="navbar-nav">
      <li class="nav-item" style={{fontSize:"22px",fontFamily:"Times New Roman Times serif"}}>
        {/* <a class="nav-link" href="#/" style={{fontSize:"22px",fontFamily:"Times New Roman Times serif"}}>Home </a> */}
        <Link to="/" style={{fontSize:"22px"}}>
          Home
        </Link>
      </li>
      <li class="nav-item" style={{marginLeft:"130%",fontFamily:"Times New Roman Times serif"}}>
      <Link to="/" style={{fontSize:"22px"}}>
          English_Dictionary
        </Link>
      </li>
      <li class="nav-item pl-5" style={{marginLeft:"130%",fontFamily:"Times New Roman Times serif"}}>
        <a class="nav-link" href="#" style={{fontSize:"22px"}}>Books</a>
      </li>
    </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
