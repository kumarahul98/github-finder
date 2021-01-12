import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/AlertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alertContext.setAlert("Plz enter something", "light");
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
          />
        </div>
      </form>
      {  githubContext.users && githubContext.users.length > 0 && (
        <button
          className="btn btn-secondary  btn-lg btn-block "
          onClick={githubContext.clearUser}
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

export default Search;
