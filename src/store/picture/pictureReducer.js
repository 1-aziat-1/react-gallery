import {
  LIKE_CHANGE,
  LIKE_DELETE,
  UPDATE_PICTURE,
  PICTURE_REQUEST,
  PICTURE_REQUEST_ERROR,
  PICTURE_REQUEST_SUCCESS,
} from './action';

const initialState = {
  loading: false,
  error: '',
  picture: [],
  img: '',
  likes: 0,
  isLiked: false,
};

export const pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICTURE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case UPDATE_PICTURE:
      return {
        error: '',
        picture: [],
        img: '',
        likes: 0,
        isLiked: false,
      };
    case PICTURE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        picture: action.picture,
        img: action.picture.urls.regular,
        likes: action.picture.likes,
        error: '',
      };
    case PICTURE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LIKE_CHANGE:
      return {
        ...state,
        picture: action.picture,
        isLiked: action.isLiked,
        likes: action.likes,
      };
    case LIKE_DELETE:
      return {
        ...state,
        picture: action.picture,
        isLiked: action.isLiked,
        likes: action.likes,
      };
    default:
      return state;
  }
};
