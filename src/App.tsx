import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';
import { AppProvider } from './AppContext';

export default function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}