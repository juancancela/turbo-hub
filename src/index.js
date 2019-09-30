import React from 'react';
import ReactDOM from 'react-dom';

import Application from './lib/data/new/Application';
import Metadata from './lib/data/new/Metadata';
import Section from './lib/data/new/Section';
import Component from './lib/data/new/Component';
import ComponentProperty from './lib/data/new/ComponentProperty';

import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import runtime from './runtime';
import { AppProvider } from './lib/context/AppContext';
const getConfig = require('./lib/utils/utils').getConfig;
const cast = require('./lib/utils/utils').cast;
const config = getConfig();

cast();

let metadata = new Metadata('test application');
let sections = [];
let componen1tSection1 = new Component('component1Section1', [new ComponentProperty('componentProperty1','1234')] );
let section1 = new Section(componen1tSection1, '/pathToSection1');
sections.push(section1);

let app = new Application(metadata, sections);



console.log('app!');
console.log(app);

const routing = (
  <AppProvider>
    <Router>
      {
        config.routes.map(route => <Route path={route.getRoute()} component={runtime.components[route.getRootComponent()]} />)
      }
    </Router>
  </AppProvider>
)

ReactDOM.render(routing, document.getElementById('root'));
