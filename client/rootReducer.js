import { combineReducers } from 'redux';

import flashMessage from './reducers/flashMessages';
import tasks from './reducers/tasks';

export default combineReducers({
  flashMessage,
  tasks
});
