import { SET_SPECIFIC_USER } from "../actions";

const inState = null;

const setSpesificUSer = (state = inState, action) => {
  switch (action.type) {
    case SET_SPECIFIC_USER:
      return action.payload;
    default:
      return state;
  }
};

export default setSpesificUSer;
