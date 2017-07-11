import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from './reducer_event';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  events: eventReducer
  // your reducer here
});
