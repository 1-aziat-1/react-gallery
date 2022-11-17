import {
  LIKE_CHANGE,
  PICTURE_REQUEST,
  PICTURE_REQUEST_ERROR,
  PICTURE_REQUEST_SUCCESS
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
        isLiked: true,
        likes: action.likes,
      };
    default:
      return state;
  }
};
