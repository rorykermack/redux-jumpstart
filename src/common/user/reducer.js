/* Template Reducer */
import * as actions from './actions';
import {List, Record} from 'immutable';

const InitialState = Record({
  about: '',
  profilePhoto: ''
});

const initialState = new InitialState;

export default function user(state = initialState, action) {
  switch (action.type) {
    case actions.USER_GET_INFO: {
      console.log(',adsf', action.payload)
      return state.set('about', action.payload.about);
    }
    case actions.USER_UPDATE_INFO: {
      return state.set('about', action.payload.about)
                  .set('profilePhoto', action.payload.profilePhoto)
    }
    case actions.USER_SET_PROFILE_PHOTO: {
      return state.set('profilePhoto', action.payload.profilePhoto)
    }
  }
  return state;
}
