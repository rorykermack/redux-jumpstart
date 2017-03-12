/* Home Reducer */
import {Record} from 'immutable';
import * as actions from './actions';

const InitialState = Record({
  registered: false
});

const initialState = new InitialState();

export default function home(state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER: {
      const is = action.payload.is;
      return state.set('registered', is);
    }
    default:
      return state;
  }
}
