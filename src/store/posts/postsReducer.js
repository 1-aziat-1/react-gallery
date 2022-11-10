import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_SUCCESS_PAGE,
  CHANGE_PAGE,
} from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  page: 1,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
      };
    case POSTS_REQUEST_SUCCESS_PAGE:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts],
        error: '',
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
