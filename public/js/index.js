import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import routes from './routes';
import reducers from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const storeWithMiddleware = applyMiddleware(promise)(createStore);
const store = storeWithMiddleware(reducers, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);
