import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Home from "./components/Home";

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Appbar />
        <Home />
      </div>
    );
  }
}

export default App;
