import React, { Component } from "react";
import MyComponent from "./component/MyComponent";

class App extends Component {
  render() {
    const name = "리액트";
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

export default App;
