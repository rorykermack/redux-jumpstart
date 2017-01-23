/* Libs */
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

/* Actions */
import * as _templateActions from '../_template/actions';

import * as homeActions from '../home/actions';
import * as todoActions from '../todo/actions';
import * as authActions from '../auth/actions';
import * as userActions from '../user/actions';
import * as appActions from './appActions';

const actions = [
  _templateActions,
  appActions,
  homeActions,
  todoActions,
  authActions,
  userActions
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
