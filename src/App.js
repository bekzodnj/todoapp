import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Todos from './components/Todos';
import AddNewTodoButton from './components/AddNewTodoBtn';
//Redux imports
import { Provider } from 'react-redux';
import store from './store';

/*
     Screen consist of 3 main part:
        - Header
        - Todos (parent for separate TodoItems)
        - Add New Todo Button with drawer
  */
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='phone'>
          <Header />
          <Todos />
          <AddNewTodoButton />
        </div>
      </div>
    </Provider>
  );
}

export default App;
