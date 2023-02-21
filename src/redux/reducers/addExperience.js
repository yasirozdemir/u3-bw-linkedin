import { ADD_EXPERIENCE } from "../actions";

const initialState = {
  experience: "",
};

const setExperience = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};

export default setExperience;
