import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Input from './features/input/Input';
import './App.css';
import Output from './features/output/Output';

function App() {
  return (
    <div className="App">
     <Input />
     <Output />
    </div>
  );
}

export default App;
