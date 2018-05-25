import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </main>
);

export default App;
