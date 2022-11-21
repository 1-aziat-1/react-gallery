import {tokenMiddleware} from './token/action';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import pictureReducer from './picture/pictureSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    picture: pictureReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
