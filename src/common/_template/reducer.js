/* Template Reducer */
import * as actions from './actions';
import {List, Record} from 'immutable';

const InitialState = Record({
  active: false
});

const initialState = new InitialState;

export default function _template(state = initialState, action) {
  switch (action.type) {
    case actions.TEMPLATE_TOGGLE: {
      return state.set('active', !state.active);
    }
  }
  return state;
}
