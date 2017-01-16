import { createStore, applyMiddleware } from 'redux';
import rootReducer from './app/reducer';
import thunk from 'redux-thunk'


const rootReducerPath = './app/reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    console.log('=== DEV ENVIRONMENT ===');
    // Enable Webpack hmr => reducers
    module.hot.accept('./app/reducer', () => {
      const nextReducer = require('./app/reducer');
      store.replaceReducer(nextReducer);
      console.log('/***** Hmr Redux Store Updated *****/');
    });
  }

  return store;
}
