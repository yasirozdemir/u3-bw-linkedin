import { SET_USER_LIST } from "../actions";

const inState = null;

const myInfoReducer = (state = inState, action) => {
  switch (action.type) {
    case SET_USER_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default myInfoReducer;
