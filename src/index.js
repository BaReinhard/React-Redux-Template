/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router,browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes.js';
import configureStore from './store/configureStore';
//require('./favicon.ico'); // Tell webpack to load favicon.ico
import './css/baseStyle.css'; 

const store = configureStore();



render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);