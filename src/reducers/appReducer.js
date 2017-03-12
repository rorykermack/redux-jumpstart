import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

/* Screen Reducers */
import Home from './Home/reducer';
import ToDo from './ToDo/reducer';
/* --- Screen Reducers */

const rootReducer = combineReducers({
  Home,
  ToDo,
  routing
});

export default rootReducer;
