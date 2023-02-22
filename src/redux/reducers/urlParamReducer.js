import { SET_URL_PARAM } from "../actions";

const inState = null;

const urlParamReducer = (state = inState, action) => {
  switch (action.type) {
    case SET_URL_PARAM:
      return action.payload;
    default:
      return state;
  }
};

export default urlParamReducer;
