import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";
import GithubState from './context/github/GithubState';


const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);

  // const searchUser = async (search) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setLoading(false);
  //   setUsers(res.data.items)
  // };

  const getUser = async (user) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${user}?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUser(res.data)
    const repos = await axios.get(
      `https://api.github.com/users/${user}/repos?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setRepos(repos.data);
  };

  const clearUser = () => {
    setLoading(false);
    setUsers([]);
  };
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <div>
            <Navbar title="Github Finder" />
          </div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/user/:login" render={props => (<User {...props} getUser={getUser} loading={loading} User={user} Repos={repos} />)} />
            <Route exact path="/*">
              <div className="container">
                <Alert alert={alert} />
                <Search
                  clearUser={clearUser}
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <div>
                  <Users
                  />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </GithubState>
  );

}

export default App;
