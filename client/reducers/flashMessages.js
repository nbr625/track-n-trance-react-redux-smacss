import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';

// Handles action calls by changing the redux store state
// According to what actions are called.

export default (state = { status: 'deleted' }, action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return Object.assign({}, state, {
        id: shortid.generate(),
        status: action.status,
        text: action.text,
        err: action.err || ''
      });
      break;

    case DELETE_FLASH_MESSAGE:
      return Object.assign({}, state, {
        status: 'deleted',
      });

    default: return state;
  }
}
