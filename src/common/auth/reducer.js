/* Home Reducer */
import * as actions from './actions';
import {List, Record} from 'immutable';

const InitialState = Record({
  loggedIn: false,
  userId: '',
  token: '',
  tokenExpires: '',
  userFirstName: ''
});

const initialState = new InitialState;

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN: {
      console.log('loggedin!!', action.payload)
      return state
        .set('loggedIn', true)
        .set('userId', action.payload.user.uid)
        .set('userFirstName', action.payload.user.displayName)

    }
    case actions.AUTH_LOGOUT: {
      return state.set('loggedIn', false);
    }
    case actions.AUTH_UPDATE_USER: {
      return state.set('userFirstName', action.payload.data.name);
    }
  }
  return state;
}
