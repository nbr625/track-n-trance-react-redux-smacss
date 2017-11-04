import { FETCH_TASKS_SUCCESS, SAVE_TASKS_SUCCESS, ADD_TASK, UPDATE_TASK, DELETE_TASK_SUCCESS } from '../actions/types';
import { addFlashMessage } from './flashMessages';
import axios from 'axios';

const url = "http://cfassignment.herokuapp.com"

export function fetchTasks(userId) {
  return dispatch => {
    return axios.get(`${url}/${userId}/tasks`)
      .then(res => res.data.tasks)
      .then(tasks => dispatch({ type: FETCH_TASKS_SUCCESS, tasks }))
      .then(
        () => dispatch(addFlashMessage('Tasks were loaded', 'success')),
        err => dispatch(addFlashMessage('Sorry, failed to load', 'failure', err))
      );
  }
}

export function addTask(taskName) {
  return dispatch => {
    dispatch({ type: ADD_TASK, taskName });
    dispatch(addFlashMessage('Tasks added', 'success'))
  }
}

export function updateTask(prevText, newText){
  return dispatch => {
    dispatch({ type: UPDATE_TASK, prevText, newText });
    dispatch(addFlashMessage('Task was updated', 'success'))
  }
}

export function saveTasks(userId, tasks) {
  return dispatch => {
    return axios.post(`${url}/${userId}/tasks`, {tasks})
      .then(res => res.data.tasks)
      .then(newTasks => dispatch({ type: SAVE_TASKS_SUCCESS, newTasks }))
      .then(
        () => dispatch(addFlashMessage('Tasks saved', 'success')),
        err => dispatch(addFlashMessage('Sorry could not save tasks', 'failure', err))
      );
  }
}

export function deleteTask(userId, tasks, deletedTaskName) {
  return dispatch => {
    return axios.post(`${url}/${userId}/tasks`, {tasks})
      .then(() => dispatch({ type: DELETE_TASK_SUCCESS, deletedTaskName }))
      .then(
        () => dispatch(addFlashMessage('Task deleted', 'success')),
        err => dispatch(addFlashMessage('Task was not deleted', 'failure', err))
      );
  }
}
