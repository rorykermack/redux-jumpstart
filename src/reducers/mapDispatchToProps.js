/* Libs */
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';
/* --- Libs */

/* Screen Actions */
// import * as authActions from './Auth/actions';
import * as homeActions from './Home/actions';
import * as toDoActions from './ToDo/actions';
/* --- Screen Actions */

const actions = [
  homeActions,
  toDoActions
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
