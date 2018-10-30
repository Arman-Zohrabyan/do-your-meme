import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../src/components/App';
import Store from '../src/store/Store';

import '../src/styles/style.scss';


const state = window.__INITIAL_STATE__;
const store = Store.init(state);
window.store = store;

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
