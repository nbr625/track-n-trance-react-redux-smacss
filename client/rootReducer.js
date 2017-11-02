import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import todo from './reducers/todo';

export default combineReducers({
  flashMessages,
  todo
});
