/* Home Reducer */
import * as actions from './actions';
import {List, Record} from 'immutable';

import {_find, getRandomInt} from '../utils/utils';

const InitialState = Record({
  todos: List([])
});

const initialState = new InitialState;

export default function home(state = initialState, action) {
  switch (action.type) {
    case actions.TODO_ADD: {
      const text = action.payload.text;
      const id = `todo-${getRandomInt(1, 999)}-${getRandomInt(1, 999)}`;
      return state.update('todos', todos => todos.push({text:text, id: id}));
    }
    case actions.TODO_REMOVE: {
      const toRemove = _find(state.todos, 'id', action.payload.id),
            newToDos = state.todos.delete(toRemove);
      return state.update('todos', todos => newToDos);
    }
    case actions.TODO_CLEAR_ALL: {
      return state.update('todos', todos => List([]));
    }
  }
  return state;
}
