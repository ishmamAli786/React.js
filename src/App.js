import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import BookContainer from './components/bookContainer';
import HookBookContainer from './components/hookBookContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div>
    <BookContainer/>
    <HookBookContainer/>
    </div>
    </Provider>
  );
}

export default App;
