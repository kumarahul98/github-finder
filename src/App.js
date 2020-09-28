import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";

import axios from "axios";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   console.log(process.env.NODE_ENV);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ loading: false, users: res.data });
  // }
  searchUser = async (search) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };
  getUser = async (user) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/user/${user}?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, user: res.data });
  };
  clearUser = () => {
    this.setState({ loading: false, users: [] });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar title="Github Finder" />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="container">
                <Alert alert={this.state.alert} />
                <Search
                  searchUser={this.searchUser}
                  clearUser={this.clearUser}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <div>
                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </div>
              </div>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/user/:login"><User  /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
