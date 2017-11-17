import { combineReducers } from 'redux';

import flashMessage from './reducers/flashMessages';
import search from './reducers/search';
import bookings from './reducers/bookings';

// Agglomerates all reducers and set them as attributes
// under this given name.

export default combineReducers({
  flashMessage,
  search,
  bookings
});
