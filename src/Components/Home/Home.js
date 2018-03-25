import React from 'react'
import { connect } from 'react-redux'
import {history} from '../../Modules/Store'
import {
  DECREMENT,
  INCREMENT,
  TITLE_CHANGE,
  UPDATE_TITLE
} from './HomeActionReducer'

const Home = props => (
  <div>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to Doomguins</h1>
        <h4>Doom Doom Doooooom</h4>
      </header>
      <pre className='App-intro'>
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
      <p>{props.title}</p>
      <p>
        <input type='text' onChange={(e) => props.updateUserTitle(e.currentTarget.value)} />
        <button onClick={props.getTitle}>
                DOOM
        </button>
      </p>

      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment}>
          Increment
        </button>
      </p>

      <p>
        <button onClick={props.decrement}>
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
)

const mapStateToProps = state => ({
  count: state.counter.count,
  title: state.counter.title
})

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({
        type: INCREMENT
      })
    },
    decrement: () => {
      dispatch({
        type: DECREMENT
      })
    },
    getTitle: () => {
      dispatch({
        type: TITLE_CHANGE
      })
    },
    updateUserTitle: (value) => {
      dispatch({
        type: UPDATE_TITLE,
        payload: value
      })
    },
    changePage: () => history.push('/about-us')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
