// @flow
import React from "react";
import { history } from "../../Config/Store";
import Button from "antd/es/button/button";

const About = () => (
  <div>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">react-boilerplate</h1>
      </header>

      <h1>
        <b>About</b>
      </h1>

      <h2>This is an about page</h2>

      <p>
        <Button type="primary" onClick={() => history.replace("/")}>
          Home page
        </Button>
      </p>
    </div>
  </div>
);

export default About;
