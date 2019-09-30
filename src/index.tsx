import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import runtime from './runtime';
import { AppProvider } from './lib/context/AppContext';
import React from 'react';
import { serialize } from './lib/utils/config';
const app = serialize();

const routing = (
  <AppProvider>
    <Router>
      {
        app.getPages().map(page =>
          <Route path={page.getPath()}
            component={runtime.pages[page.getMainComponent().getName()]} />)
      }
    </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));
