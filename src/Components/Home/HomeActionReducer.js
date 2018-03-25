import generateTitle from '../../utils/penguin-pop-culture-title-generator'

// Actions
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'
export const TITLE_CHANGE = 'counter/TITLE_CHANGE'
export const UPDATE_TITLE = 'counter/UPDATE_TITLE'

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

    case UPDATE_TITLE:
      return {
        ...state,
        userTitle: action.payload
      }

    case TITLE_CHANGE:
      const tempTitle = state.userTitle ? [{ name: state.userTitle, type: 'movie' }] : undefined

      return {
        ...state,
        title: generateTitle(tempTitle)
      }

    default:
      return state
  }
}
