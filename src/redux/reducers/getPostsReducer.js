import { GET_ALL_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const getPostsReducer = (state = initialState, action) => {
  console.log("reducer tirggered");
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

console.log("initialState:", initialState);

export default getPostsReducer;
