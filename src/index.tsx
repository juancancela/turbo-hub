import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import runtime from './runtime';
import { AppProvider } from './lib/context/AppContext';
import React from 'react';
import { config } from './lib/utils/config';


const getRoutes = () => {
  const routes = [];
  config.getPages().forEach((page, key) => {
    routes.push(<Route path={key}
      component={runtime.pages[page.getMainComponent().getName()]} />)
  });
  return routes;
};

const routing = (
  <AppProvider>
    <Router>
      {
        getRoutes()
      }
    </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));
