import React, {useContext} from 'react';
import Header from './components/Header/Header';
import './App.css';
import { AppProvider, AppContext } from './AppContext';

export default function App() {
  const context = useContext(AppContext);
  console.log('context => ', context);
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
      </div>
    </AppProvider>
  );
}