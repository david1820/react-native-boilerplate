import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducer';
import { createLogger } from 'redux-logger';
import client from './apolloClient';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ }); // eslint-disable-line
const store = createStore (
  rootReducers(),
  {}, // initial state
  compose(
    applyMiddleware(
      client.middleware(),
      loggerMiddleware
    ),
  )
);

export default store;
