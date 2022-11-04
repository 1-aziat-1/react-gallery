import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware} from './token/action';
import {tokenReducer} from './token/tokenReducer';
import {authReducer} from './auth/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
