import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import ContactPage from './ContactPage';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './AppContext';
const getConfig = require('./utils/dataUtils').getConfig;
const config = getConfig();

console.log(JSON.stringify(config));

const routing = (
  <AppProvider>
    <Router>

      <div>
        <Route path="/" component={App} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
