import { GET_EVENTS_SUCCESS, GET_EVENTS_FAIL  } from '../constants';

const INITIAL_STATE = { all: [], events: null};

export default function(state = [], action) {
  switch (action.type) {

    //get all events
    case GET_EVENTS_SUCCESS:
      //add all events to events state
      return [action.payload.data, ...state];

    //all events fail
    case GET_EVENTS_FAIL:
      console.log('get all events fail');
      break;

    default:
      console.log('default', action.type);
  }
  return state;
}
