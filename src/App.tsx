import React from 'react';
import { QueryClientProvider } from 'react-query';
import './App.css';
import { reactQueryClient } from './config/queryClient';
import RouterMapper from './features/core/RouterMapper';

function App() {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <div className="App">
        <div>
         
        </div>
        <header className="App-header">
          <RouterMapper />
        </header>
      </div> 
    </QueryClientProvider>
  );
}

export default App;
