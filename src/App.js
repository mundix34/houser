import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        <Wizard/>
        <Header/>

      </div>
    );
  }
}

export default App;
