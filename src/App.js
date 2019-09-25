import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import './App.css';
import { AppProvider, AppContext } from './AppContext';

export default function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
      </div>
    </AppProvider>
  );
}