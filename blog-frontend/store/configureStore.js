import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(preloadedState) {
  	const store = createStore(
  		rootReducer, 
  		preloadedState,
  		applyMiddleware(reduxThunk, createLogger())
	);

  	// if (module.hot) {
	  //   // Enable Webpack hot module replacement for reducers
	  //   module.hot.accept('../reducers', () => {
		 //    const nextReducer = require('../reducers').default
		 //    store.replaceReducer(nextReducer)
	  //   })
  	// }

  	return store;
}