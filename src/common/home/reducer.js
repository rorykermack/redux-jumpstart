/* Home Reducer */
import * as actions from './actions';
import {List, Record} from 'immutable';

const InitialState = Record({
  registered: false
});

const initialState = new InitialState;

export default function home(state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER: {
      const is = action.payload.is;
      return state.set('registered', is);
    }
  }
  return state;
}
