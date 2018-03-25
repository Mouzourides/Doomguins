import generateTitle from '../../utils/penguin-pop-culture-title-generator'

// Actions
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const GET_TITLE = 'counter/GET_TITLE'
export const UPDATE_USER_TITLE = 'counter/UPDATE_USER_TITLE'

// State
const initialState = {
  count: 0,
  userTitle: '',
  title: generateTitle()
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case UPDATE_USER_TITLE:
      return {
        ...state,
        userTitle: action.payload
      }

    case GET_TITLE:
      const tempTitle = state.userTitle ? [{ name: state.userTitle, type: 'movie' }] : undefined

      return {
        ...state,
        title: generateTitle(tempTitle)
      }

    default:
      return state
  }
}
