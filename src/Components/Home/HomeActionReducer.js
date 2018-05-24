// @flow
// Actions

import type { RootActions } from "../../Config/Actions";

export type CounterAction = { type: string };

function createCounterAction(typeName: string): CounterAction {
  return { type: typeName };
}

export const INCREMENT: CounterAction = createCounterAction("INCREMENT");
export const DECREMENT: CounterAction = createCounterAction("DECREMENT");

export type State = {
  count: number
};

// State
const initialState: State = {
  count: 0
};

// Reducer
export default (state: State = initialState, action: RootActions) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};
