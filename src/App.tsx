import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterMapper from './features/core/RouterMapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterMapper />
      </header>
    </div>
  );
}

export default App;
