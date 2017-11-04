import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';

export default (state = {}, action = {}) => {
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
