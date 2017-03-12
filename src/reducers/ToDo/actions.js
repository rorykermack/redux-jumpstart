/* === Consts === */
export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_CLEAR_ALL = 'TODO_CLEAR_ALL';
export const TODO_GET_ALL = 'TODO_GET_ALL';

/* === Actions === */
export function todoAddComplete(todo) {
  // Can be used to pass api call
  return {
    type: 'TODO_ADD',
    payload: {
      text: todo
    }
  };
}

export function todoAdd(todo) {
  return (dispatch) => {
    return dispatch(todoAddComplete(todo));
  };
}

export function todoRemove(id) {
  return {
    type: 'TODO_REMOVE',
    payload: {
      id
    }
  };
}

export function todoClearAll() {
  return {
    type: 'TODO_CLEAR_ALL'
  };
}
