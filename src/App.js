import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import {Link} from 'react-router-dom';
import route from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>

        <nav>
        <Link to="/" className='links'>Dashboard</Link> 
        <Link to="/wizard" className='links'>Wizard</Link>
        </nav>
        { route }

      </div>
    );
  }
}

export default App;
