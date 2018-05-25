import React, { Component } from "react";
import Button from "antd/es/button/button";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-boilerplate</h1>
        </header>
        <p>
          <Button type="primary">Hello world</Button>
        </p>
      </div>
    );
  }
}

export default Home;
