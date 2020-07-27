import React from 'react';
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppNavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
