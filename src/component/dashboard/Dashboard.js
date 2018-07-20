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
    const properties = this.state.houses.map((house, i) => (
      <h3 key={ i }>{ house.property_name } { house.address } { house.city }{ house.state }{ house.zip }</h3>
    ));

    return (
      <div className="dashboard">
          <h1>Dashboard</h1>
          <House properties= {properties}/>
          <Link to='/wizard'><button className='btn'>Add New Property</button></Link>

        
      </div>
    );
  }
}

export default Dashboard;
