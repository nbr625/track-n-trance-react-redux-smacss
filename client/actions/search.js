import { SET_ACTIVE_BOOKING, FETCH_BOOKING_ERROR,  SAVE_BOOKING, DELETE_SAVED_BOOKING, CLEAR_SAVED_BOOKINGS } from '../actions/types';
import { addFlashMessage } from './flashMessages';
import axios from 'axios';

// This actions will be dispatched and call the corresponding
// reducer action (characterized by 'type')

const url = "https://gist.githubusercontent.com/dodeja/e0543d3faf6b5afd4e672751669a3bf1/raw/4d66947e0b12d97b8f25cd5fc11c0e3f4b32a6b2";


export function fetchBooking(bookingId) {
  return dispatch => {
    return axios.get(`${url}/${bookingId}.json`)
      .then(res => res.data)
      .then(booking => dispatch(setActiveBooking(booking)))
      .then(
        () => dispatch(addFlashMessage('Booking was found', 'success')),
        err => dispatch({ type: FETCH_BOOKING_ERROR })
      );
  }
}

export function setActiveBooking(booking) {
  return dispatch => {
    dispatch({ type: SET_ACTIVE_BOOKING, booking });
  }
}

export function saveBooking(booking) {
  return dispatch => {
    dispatch({ type: SAVE_BOOKING, booking });
    dispatch(addFlashMessage('Saved Booking', 'success'))
  }
}

export function deleteSavedBooking(booking){
  return dispatch => {
    dispatch({ type: DELETE_SAVED_BOOKING, booking });
    dispatch(addFlashMessage('Deleted Booking', 'success'))
  }
}

export function clearAllSavedBookings(){
  return dispatch => {
    dispatch({ type: CLEAR_SAVED_BOOKINGS });
    dispatch(addFlashMessage('Deleted all Bookings', 'success'))
  }
}
