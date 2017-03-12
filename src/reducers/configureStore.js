import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './appReducer';

export default function configureStore(initialState) {
  if (module.hot) {
    /* eslint-disable */
    console.log('=== DEV ENVIRONMENT ===');
    /* eslint-disable */
  }
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
