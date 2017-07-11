import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import freeze from 'redux-freeze';
import axios from 'axios';
import ReduxPromise from 'redux-promise';
import axiosMiddleware from 'redux-axios-middleware';
import { createLogger } from 'redux-logger';

import { API_URL } from './constants';
import { reducers } from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const apiClient = axios.create({
  baseURL: API_URL,
  responseType: 'json'
});

// add the middlewares
const middlewares = [];

//add the logger software
middlewares.push(createLogger());

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

middlewares.push(axiosMiddleware(apiClient));
middlewares.push(ReduxPromise);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
