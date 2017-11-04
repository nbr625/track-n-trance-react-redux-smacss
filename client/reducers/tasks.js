import { FETCH_TASKS_SUCCESS, ADD_TASK, DELETE_TASK_SUCCESS, SAVE_TASKS_SUCCESS, } from '../actions/types';

const defaultProps = {
  tasks: []
}

export default (state = defaultProps, action = {}) => {
  switch(action.type){
    case FETCH_TASKS_SUCCESS:
    case FETCH_TASKS_SUCCESS:
      let tasks = action.tasks.map(function(text){
        return { text, saved: true }
      });
      return Object.assign({}, state, {
        tasks
      });
      break;
    case ADD_TASK:
      let newTasks = state.tasks;
      newTasks.push({ text: action.taskName, saved: false })
      return Object.assign({}, state, {
        tasks: newTasks
      });
      break;
    case SAVE_TASKS_SUCCESS:
      let savedTasks = state.tasks.map(function(task) {
        return { text: task.text, saved: true };
      });
      return Object.assign({}, state, {
        tasks: savedTasks
      });
      break;
    case DELETE_TASK_SUCCESS:
      let newTodos = state.tasks.filter(task => task.text !== action.deletedTaskName);
      return Object.assign({}, state, {
        tasks: newTodos
      });
      break;
    default: return state;
  }
}
