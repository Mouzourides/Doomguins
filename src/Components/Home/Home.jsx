import React, { Component } from "react";
import Button from "antd/es/button/button";

class Home extends Component {
  state = { count: 0 };

  incrementCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrementCount() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">react-boilerplate</h1>
        </header>
        <div>
          <p>
            <b>Count:</b> {this.state.count}
          </p>
          <p>
            <Button type="primary" onClick={() => this.incrementCount()}>
              Increment
            </Button>
          </p>

          <p>
            <Button type="primary" onClick={() => this.decrementCount()}>
              Decrement
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
