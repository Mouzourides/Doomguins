import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { decrement, increment } from "./HomeActionReducer";

const Home = props => (
  <div>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Doomguins</h1>
        <h4>Doom Doom Doooooom</h4>
      </header>
      <pre className="App-intro">
        .___.<br />
        /\ /\<br />
        | O\_/O |<br />
        / \_/ \<br />
        .' / \ `.<br />
        / _| |_ \<br />
        (_/ | | \_)<br />
        \ /<br />
        __\_ _/__<br />
        ~;/ \;~<br />
      </pre>
      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment} disabled={props.isIncrementing}>
          Increment
        </button>
      </p>

      <p>
        <button onClick={props.decrement} disabled={props.isDecrementing}>
          Decrement
        </button>
      </p>

      <p>
        <button onClick={() => props.changePage()}>
          Go to about page via redux
        </button>
      </p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
