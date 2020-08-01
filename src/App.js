import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Github Finder" />
      </div>
    );
  }
}

export default App;
