import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";

import axios from 'axios';
class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ loading: false, users: res.data })
  }

  render() {
    return (
      <div>
        <Navbar title="Github Finder" />
        <div className="container"><Users loading={this.state.loading} users={this.state.users} /></div>
      </div>
    );
  }
}

export default App;
