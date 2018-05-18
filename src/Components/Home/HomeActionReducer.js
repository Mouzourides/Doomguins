
// Actions
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

// State
const initialState = {
  count: 0,
  userTitle: ''
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default:
      return state
  }
}
