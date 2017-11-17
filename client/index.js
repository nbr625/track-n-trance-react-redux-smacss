import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

import routes from './routes';

// Initiates store, allows for chrome dev tools extension,
// and sets thunk as main middleware. Thunk allow us to us
// to return a function and call it within our actions

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// targets 'app' id sets application with store and router to that div.
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
