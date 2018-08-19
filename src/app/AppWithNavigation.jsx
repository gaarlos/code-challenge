import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppWithRedux from 'app/AppWithRedux';

export const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <AppWithRedux />
  </Router>
);
