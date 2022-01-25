import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [];

// in development, logger won't be seen in console
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
