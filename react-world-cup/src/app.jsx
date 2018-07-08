import React from 'react';
import Dashboard from './components/Dashboard';


//import "styles/base/_main.sass"  // Global styles
//import "styles/base/_common.sass"  // Global styles
//import styles from "./app.sass"  // Css-module styles
import json from './assets/json/data.json';

const App = () => (
  <div className='container'>
    <Dashboard initData="my Value"/>



  </div>
);

export default App;
