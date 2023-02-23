import { GET_SPECIFIC_POST } from "../actions";

const inState = null;

const specificPostReducer = (state = inState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_POST:
      return action.payload;
    default:
      return state;
  }
};

export default specificPostReducer;
