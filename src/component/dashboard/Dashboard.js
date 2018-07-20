import React, { Component } from 'react';
// import './App.css';
import House from '../House/House'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
          <h1>Dashboard</h1>
          <House/>
        
      </div>
    );
  }
}

export default Dashboard;
