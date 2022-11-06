import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware} from './token/action';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import thunk from 'redux-thunk';
import {postsReducer} from './posts/postsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,
  posts: postsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
