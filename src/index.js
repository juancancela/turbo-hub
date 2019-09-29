import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import runtime from './runtime';
import { AppProvider } from './lib/context/AppContext';
const getConfig = require('./lib/utils/utils').getConfig;
const config = getConfig();

const routing = (
  <AppProvider>
    <Router>
      {
        config.routes.map(route => <Route path={route.getRoute()} component={runtime[route.getRootComponent()]} />)
      }
    </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));
