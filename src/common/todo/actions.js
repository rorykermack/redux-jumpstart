/* === Consts === */
export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_CLEAR_ALL = 'TODO_CLEAR_ALL';

/* --- Actions --- */
export function todo_add(todo) {
  return {
    type: 'TODO_ADD',
    payload: {
      text: todo
    }
  }
}
export function todo_remove(id) {
  return {
    type: 'TODO_REMOVE',
    payload: {
      id : id
    }
  }
}
export function todo_clearAll() {
  return {
    type: 'TODO_CLEAR_ALL'
  }
}
