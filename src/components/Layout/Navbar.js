import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
      style={{ color: "white" }}
    >
      <Link className="navbar-brand" to="/">
        <FaGithub style={styleIcon} /> {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

const styleIcon = {
  marginBottom: "6px",
};
export default Navbar;
