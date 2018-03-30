import React from 'react'
import { connect } from 'react-redux'
import {history} from '../../Modules/Store'

import {
  DECREMENT,
  INCREMENT,
  GET_TITLE,
  UPDATE_USER_TITLE
} from './HomeActionReducer'
import Button from 'antd/es/button/button'

const Home = props => (
  <div>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to Doomguins</h1>
        <h4 className='App-title'>Doom Doom Doooooom</h4>
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
        <Button type='primary' onClick={props.getTitle}>
                DOOM
        </Button>
      </p>

      <p>Count: {props.count}</p>

      <p>
        <Button type='primary' onClick={props.increment}>
          Increment
        </Button>
      </p>

      <p>
        <Button type='primary' onClick={props.decrement}>
          Decrement
        </Button>
      </p>

      <p>
        <Button type='primary' onClick={() => props.changePage()}>
          Go to about page via redux
        </Button>
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
        type: GET_TITLE
      })
    },
    updateUserTitle: (value) => {
      dispatch({
        type: UPDATE_USER_TITLE,
        payload: value
      })
    },
    changePage: () => history.push('/about-us')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
