import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => { 

  return (
    <GithubState>
      <AlertState>
      <Router>
        <div>
          <div>
            <Navbar title="Github Finder" />
          </div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/user/:login" render={props => (<User {...props}  />)} />
            <Route exact path="/*">
              <div className="container">
                <Alert  />
                <Search
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
      </AlertState>
    </GithubState>
  );

}

export default App;
