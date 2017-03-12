/* Auth Reducer */
import {Record} from 'immutable';
import * as actions from './actions';

const InitialState = Record({
  loggedIn: false,
  userId: '',
  token: '',
  tokenExpires: '',
  userFirstName: '',
  firstTime: false
});

const initialState = new InitialState();

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN: {
      return state
        .set('loggedIn', true)
        .set('userId', action.payload.user.uid)
        .set('userFirstName', action.payload.user.displayName);
    }
    case actions.AUTH_LOGOUT: {
      return state.set('loggedIn', false);
    }
    case actions.AUTH_UPDATE_USER: {
      return state.set('userFirstName', action.payload.data.name);
    }
    case actions.AUTH_ENLIST: {
      return state.set('firstTime', true);
    }
    default:
      return state;
  }
}
