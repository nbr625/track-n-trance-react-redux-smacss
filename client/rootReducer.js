import { combineReducers } from 'redux';

import flashMessage from './reducers/flashMessages';
import search from './reducers/search';
import bookings from './reducers/bookings';

export default combineReducers({
  flashMessage,
  search,
  bookings
});
