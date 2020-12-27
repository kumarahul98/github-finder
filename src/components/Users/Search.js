import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import GithubState from "../../context/github/GithubState";

const Search = ({ clearUser, setAlert, showClear }) => {
  const githubContext = useContext(GithubContext)
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Plz enter something", "light");
    } else {
      githubContext.searchUser(search);
      setSearch('');
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div
          className="form-group input-group input-group-lg"
          style={top_margin}
        >
          <input
            type="text"
            value={search}
            className="form-control"
            placeholder="Enter Username"
            onChange={onChange}
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
      {showClear && (
        <button
          className="btn btn-secondary  btn-lg btn-block "
          onClick={clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );

}
const top_margin = {
  marginTop: ".5rem",
};
Search.propTypes = {
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func,
  showClear: PropTypes.bool.isRequired,
};
export default Search;
