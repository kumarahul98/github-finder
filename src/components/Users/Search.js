import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  state = {
    search: "",
  };
  static propTypes = {
    clearUser: PropTypes.func.isRequired,
    searchUser: PropTypes.func.isRequired,
    setAlert: PropTypes.func,
  };
  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === "") {
      this.props.setAlert("Plz enter something", "light");
    } else {
      this.props.searchUser(this.state.search);
      this.setState({ search: "" });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <div
            className="form-group input-group input-group-lg"
            style={top_margin}
          >
            <input
              type="text"
              value={this.state.search}
              className="form-control"
              placeholder="Enter Username"
              onChange={this.onChange}
            />{" "}
          </div>
          <div className="form-group">
            <input
              type="submit"
              id="submit"
              className="btn btn-dark btn-lg btn-block"
              value="Submit"
            />{" "}
          </div>
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-secondary  btn-lg btn-block "
            onClick={this.props.clearUser}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
const top_margin = {
  marginTop: ".5rem",
};
export default Search;
