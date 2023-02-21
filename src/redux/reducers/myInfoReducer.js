import { SET_MY_INFO, UPDATE_MY_INFO } from "../actions";

const inState = null;

const myInfoReducer = (state = inState, action) => {
  switch (action.type) {
    case SET_MY_INFO:
      return action.payload;
    case UPDATE_MY_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default myInfoReducer;
