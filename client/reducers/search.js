import { SAVE_BOOKING, DELETE_SAVED_BOOKING, CLEAR_SAVED_BOOKINGS } from '../actions/types';

const defaultProps = {
  savedBookings: []
}

// Handles action calls by changing the redux store state
// According to what actions are called.

export default (state = defaultProps, action = {}) => {
  switch(action.type){
    case SAVE_BOOKING:
      let updatedBookings = state.savedBookings;
      updatedBookings.push(action.booking);
      return Object.assign({}, state, {
        savedBookings: updatedBookings
      });
      break;
    case DELETE_SAVED_BOOKING:
      let newBookings = state.savedBookings.filter((booking) => { booking === action.booking });
      return Object.assign({}, state, {
        savedBookings: newBookings
      });
      break;
    case CLEAR_SAVED_BOOKINGS:
      return Object.assign({}, state, {
        savedBookings: []
      });
      break;
    default: return state;
  }
}
