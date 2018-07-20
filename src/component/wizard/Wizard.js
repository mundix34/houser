import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

// import './App.css';

class Wizard extends Component {
  
  render() {
    return (
      <div className="wizard">
          <h1>Wizard</h1>
        
          <Link to='/'><button className='btn'>Cancel/To Dashboard</button></Link>
      </div>
    );
  }
}

export default Wizard;
