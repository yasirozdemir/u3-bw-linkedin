import { SET_NETWORK_LIST } from "../actions";

const initialState = {
  profiles: [],
};

const setNetworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NETWORK_LIST:
      return {
        profiles: action.payload,
      };

    default:
      return state;
  }
};

export default setNetworkReducer;
