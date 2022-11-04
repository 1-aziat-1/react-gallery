import {setToken} from '../../api/token';

export const TOKEN_UPDATE = 'TOKEN_UPDATE';
export const TOKEN_DELETE = 'TOKEN_DELETE';

export const tokenUpdate = (token) => ({
  type: TOKEN_UPDATE,
  token,
});


export const tokenDelete = (token) => ({
  type: TOKEN_DELETE,
  token,
});

export const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type === TOKEN_UPDATE) {
    setToken(action.token);
  }

  if (action.type === TOKEN_DELETE) {
    setToken('');
  }

  next(action);
};


