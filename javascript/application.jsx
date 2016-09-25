import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Store from './store';

const router = () => (
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  if(window.currentUser) {SessionActions.receiveCurrentUser(window.currentUser);}
  let root = document.getElementById('content');
  ReactDOM.render(router, root);
});
