import React, { Component } from 'react';
// import './App.css';
import House from '../House/House';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
  constructor(){
    super()
    this.state ={
      houses:[]
    }
  }
  componentDidMount(){
    axios.get('/api/properties').then((res) =>{
      this.setState({
        movies:res.data
      })
    })
  }
  render() {
    return (
      <div className="dashboard">
          <h1>Dashboard</h1>
          <House/>
          <Link to='/wizard'><button className='btn'>Add New Property</button></Link>

        
      </div>
    );
  }
}

export default Dashboard;
