import React from 'react';
import './App.css';
import Child from './child';
import { TransactionProvider} from './transactionContext';
function App() {
  return (
    // <TransactionContext.Provider>
    <TransactionProvider>
    <Child/>
    </TransactionProvider>
  );
}

export default App;
