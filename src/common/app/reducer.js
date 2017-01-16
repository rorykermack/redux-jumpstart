import { routerReducer as routing } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

/* Comp Reducers */
import _template from '../_template/reducer';
import home from '../home/reducer';
import todo from '../todo/reducer';
import auth from '../auth/reducer';

const rootReducer = combineReducers({
    routing,
    _template,
    home,
    todo,
    auth
  });

export default rootReducer;
