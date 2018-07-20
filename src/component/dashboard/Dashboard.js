import React, { Component } from 'react';
// import './App.css';
import House from '../House/House';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state ={
      houses:[]
    }
this.deleteProperty = this.deleteProperty.bind(this);
this.getProperties = this.getProperties.bind(this);

  }
  componentDidMount(){
    axios.get('/api/properties').then((res) =>{
      // console.log(res);
      this.setState({
        houses: res.data
      })
    })
  }
  getProperties(){
    axios.get('/api/properties').then((res) =>{
      this.setState({
        houses: res.data
      })
    })
  }
  deleteProperty(id){
    axios.delete(`/api/property${id}`).then((res) =>{      
      this.setState({
        houses: res.data
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
          {properties}
          <House properties= {properties} getProp= {this.getProperties}/>
          <button className ="btn" onClick = {() => this.deleteProperty()}>Delete Property </button>

          <Link to='/wizard'><button className='btn'>Add New Property</button></Link>

        
      </div>
    );
  }
}

export default Dashboard;
