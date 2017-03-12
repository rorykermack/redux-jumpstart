/* ToDo Reducer */
import {List, Record} from 'immutable';
import * as actions from './actions';

import {find, getRandomInt} from '../../helpers/utils';

const InitialState = Record({
  todos: List([])
});

const initialState = new InitialState();

export default function home(state = initialState, action) {
  switch (action.type) {
    case actions.TODO_ADD: {
      const text = action.payload.text;
      const id = `todo-${getRandomInt(1, 999)}-${getRandomInt(1, 999)}`;
      return state.update('todos', todos => todos.push({text, id}));
    }
    case actions.TODO_REMOVE: {
      const toRemove = find(state.todos, 'id', action.payload.id);
      return state.update('todos', todos => todos.delete(toRemove));
    }
    case actions.TODO_CLEAR_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}
