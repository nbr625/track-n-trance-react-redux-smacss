import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import todoIndexPage from './components/todos/todoIndexPage';
import newTodoPage from './components/todos/newTodoPage';

export default (
  <Route path="/" component={App}>
    <Route path="index" component={todoIndexPage} />
    <Route path="new-todo" component={newTodoPage} />
  </Route>
)
