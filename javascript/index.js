import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import App from './components/app';

const store = createStore(reducer);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  // if(window.currentUser) {SessionActions.receiveCurrentUser(window.currentUser);}
  let root = document.getElementById('content');
  ReactDOM.render(router, root);
});
