// function that receive state and action,
// based on the action type,
// return the action/state changed by the action.

// IMPORTANT:
// state must be set to something, it cannot be empty.
// solution: we must set the initial state to something.

import {
  DELETE,
  UPDATE,
  FETCH_ALL,
  CREATE,
  FETCH_BY_SEARCH,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
  COMMENT,
} from "../constant/actionTypes";
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case DELETE:
      // we filter the post, only get the post that is not the removed id.
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        // we want to return all the post and only change the one that just receives the comment.
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOf,
      };
    case CREATE:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
