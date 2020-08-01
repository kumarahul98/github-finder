import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark" style={{ color: "white" }}>
        <a className="navbar-brand" href="#">
          <FaGithub /> {this.props.title}
        </a>
      </nav>
    );
  }
}

export default Navbar;
