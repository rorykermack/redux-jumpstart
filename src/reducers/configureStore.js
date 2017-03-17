import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './appReducer';

const routerMW = routerMiddleware(browserHistory);
export default function configureStore() {
  if (module.hot) {
    /* eslint-disable */
    console.log('=========== REDUX-JUMPSTART DEV ENVIRONMENT ===========');
    /* eslint-disable */
    return createStore(rootReducer, composeWithDevTools(
      applyMiddleware(thunk, routerMW)
    ));
  }
  return createStore(rootReducer, initialState, applyMiddleware(thunk));

  // @todo [Rory]: Keep state between hot reloads
  // if (module.hot) {
  //   console.log('=== DEV ENVIRONMENT ===');
  //   // Enable Webpack hmr => reducers
  //   module.hot.accept('./app/reducer', () => {
  //     const nextReducer = require('./app/reducer');
  //     store.replaceReducer(nextReducer);
  //     console.log('/***** Hmr Redux Store Updated *****/');
  //   });
  // }
}
