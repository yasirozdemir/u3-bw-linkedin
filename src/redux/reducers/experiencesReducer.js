import { GET_SPECIFIC_USER } from "../actions";

const inState = null;

const userExperienceReducer = (state = inState, action) => {
  switch (action.type) {
    case GET_SPECIFIC_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userExperienceReducer;
