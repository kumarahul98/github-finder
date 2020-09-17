import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{ color: "white" }}>
      <a className="navbar-brand" href="#">
        <FaGithub style={styleIcon} /> {props.title}
      </a>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

const styleIcon = {
  marginBottom: '6px'
};
export default Navbar;
