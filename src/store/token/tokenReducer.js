import {
  TOKEN_UPDATE,
  TOKEN_DELETE,
} from './action';

const initialState = {
  token: '',
  error: '',
};


export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_UPDATE:
      return {
        ...state,
        token: action.token,
      };

    case TOKEN_DELETE:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
