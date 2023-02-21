import { EDIT_EXPERIENCE } from "../actions";

const initialState = {
  experience: "",
};

const editExperience = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};

export default editExperience;
