import { GET_TODOS, ADD_TODOS, DELETE_TODOS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case GET_TODOS:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case ADD_TODOS:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    case DELETE_TODOS:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
}
