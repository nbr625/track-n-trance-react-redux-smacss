import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import todoIndexPage from './components/todos/todoIndexPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={todoIndexPage} />
  </Route>
)
