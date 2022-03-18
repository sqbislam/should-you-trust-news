
import React from 'react';
import { QueryClientProvider } from 'react-query';
import './App.css';
import { reactQueryClient } from './config/queryClient';
import RouterMapper from './features/core/RouterMapper';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <QueryClientProvider client={reactQueryClient}>
          <RouterMapper />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
