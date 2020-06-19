import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <div className='App'>
      <div className='phone'>
        <Header />
        <Todos />
      </div>
    </div>
  );
}

export default App;
