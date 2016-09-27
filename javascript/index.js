import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { updateCurrentUser } from './actions';

import App from './components/app';
import Main from './components/main';
import VisibleGame from './containers/visible_game';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="" component={Main}/>
        <Route path="game/:gameId" component={VisibleGame}/>
      </Route>
    </Router>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  if(window.currentUser) { store.dispatch(updateCurrentUser(window.currentUser)); }
  let root = document.getElementById('content');
  ReactDOM.render(router, root);
});
