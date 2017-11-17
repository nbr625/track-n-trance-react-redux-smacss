import { SET_ACTIVE_BOOKING, FETCH_BOOKING_ERROR } from '../actions/types';

const defaultProps = {
  activeBooking: {},
  error: false
}

// Handles action calls by changing the redux store state
// According to what actions are called.

export default (state = defaultProps, action = {}) => {
  switch(action.type){
    case SET_ACTIVE_BOOKING:
      return Object.assign({}, state, {
        activeBooking: action.booking,
        error: false
      });
      break;
    case FETCH_BOOKING_ERROR:
      return Object.assign({}, state, {
        activeBooking: {},
        error: true
      });
      break;

    default: return state;
  }
}
