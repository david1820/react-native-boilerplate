import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './navigation';
import { apolloReducer } from './apolloClient';
// IMPORTS CONTAINERS REDUCERS
import Home from './containers/Home/reducer';

const appInitialState = fromJS({
});

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case 'DEFAULT_ACTION':
      return state;
    default:
      return state;
  }
}

function nav(state, action) {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default function rootReducers() {
  return combineReducers({
    App: appReducer,
    nav,
    apollo: apolloReducer,
    // REDUCERS
    Home: Home,
  });
}
