import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";
import Search from './components/Users/Search';

import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  
  async componentDidMount() {
    console.log(process.env.NODE_ENV);
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setTimeout(() => { this.setState({ loading: false, users: res.data }) }, 1000);
  }
  searchUser = async search => {
    this.setState({ loading: true });
    const res =  await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items });

  }
  render() {
    return (
      <div >
        <div><Navbar title="Github Finder" /></div>
        <div className="container" > <Search searchUser={this.searchUser} /><div style={{ height: '500px', overflow: 'auto' }}><Users loading={this.state.loading} users={this.state.users} /></div></div>
      </div>
    );
  }
}

export default App;
