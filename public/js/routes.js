import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, MainView } from './containers/containers';

export default(
  <Route path='/' component={ App }>
    <IndexRoute component={ MainView } />
  </Route>
);
