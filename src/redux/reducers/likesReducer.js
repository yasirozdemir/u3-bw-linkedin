import { DISLIKE, LIKE } from "../actions";

const inState = [];

const likesReducer = (state = inState, action) => {
  switch (action.type) {
    case LIKE:
      return [...state, action.payload];
    case DISLIKE:
      return state.filter((el) => el._id !== action.payload);
    default:
      return state;
  }
};

export default likesReducer;
