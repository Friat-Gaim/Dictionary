import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = props => {
  return (
    <nav className="nav-wrapper grey primary-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Dictionary
        </Link>
        
      </div>
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
