import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

// This actions will be dispatched and call the corresponding
// reducer action (characterized by 'type')

export function addFlashMessage(text, status, err = null) {
  return {
    type: ADD_FLASH_MESSAGE,
    text,
    status,
    err
  }
}

export function deleteFlashMessage() {
  return {
    type: DELETE_FLASH_MESSAGE
  }
}
