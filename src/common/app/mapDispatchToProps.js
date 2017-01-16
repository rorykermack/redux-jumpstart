/* Libs */
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

/* Actions */
import * as _templateActions from '../_template/actions';

import * as homeActions from '../home/actions';
import * as todoActions from '../todo/actions';
import * as authActions from '../auth/actions';

const actions = [
  _templateActions,
  homeActions,
  todoActions,
  authActions
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
