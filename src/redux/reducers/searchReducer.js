import { SET_SEARCH_QUERY } from "../actions";

const query = "";

const searchReducer = (state = query, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
