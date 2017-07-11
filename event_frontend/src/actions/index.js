export * from './companies.js';
import { GET_EVENTS } from '../constants';


//basic get action
export function getEvents(){
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: EVENTS_URL
      }
    }
  };
}
