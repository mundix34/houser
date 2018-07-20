import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// import './App.css';

class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

this.addPropertyName = this.addPropertyName.bind(this);
this.addAddress = this.addAddress.bind(this);
this.addCity = this.addCity.bind(this);
this.addState = this.addState.bind(this);
this.addZip = this.addZip.bind(this);
this.addProperty = this.addProperty.bind(this);
this.deleteProperty = this.deleteProperty.bind(this);

  }
  addPropertyName(val){
    this.setState({
        name: val
    })
}
  addAddress(val){
    this.setState({
        address: val
    })
}
  addCity(val){
    this.setState({
        city: val
    })
}
  addState(val){
    this.setState({
        state: val
    })
}
  addZip(val){
    this.setState({
        zip: val
    })
}
clearInput(){
    this.setState({
        name:'', address:'', city:'', state: '', zip: ''
    })
}
addProperty(){
    const newProperty = {
        name: this.state.name,
        address:this.state.price,
        city: this.state.imageurl,
        state: this.state.imageurl,
        zip: this.state.imageurl
    }
    axios.post('/api/property', newProperty).then((res) =>{
        this.setState({houses: res.data})
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
    return (
      <div className="wizard">
          <h1>Wizard</h1>
          <form>
                        <label> Property Name</label>
                        <input className = "input" onChange = {(e) => this.addPropertyName(e.target.value)}/>
                        <br/>
                        
                        <label> Address</label>
                         <input className = "input" onChange = {(e) => this.addAddress(e.target.value)}/>

                        <br/> 
                        <label> City</label>
                        <input className = "input" onChange = {(e) => this.addCity(e.target.value)}/>
                        
                        <br/> 
                        <label> State</label>
                        <input className = "input" onChange = {(e) => this.addState(e.target.value)}/>
                        
                        <br/> 
                        <label> ZipCode</label>
                        <input className = "input" onChange = {(e) => this.addZip(e.target.value)}/>
                        
                        <br/> 
                        <button className ="btn" onClick = {() => this.addProperty()}>Complete</button>
                        <button className ="btn" onClick = {() => this.clearInput()}>Cancel </button>

    
    
                    </form>
          <Link to='/'><button className='btn'>Cancel</button></Link>

        
      </div>
    );
  }
}

export default Wizard;
