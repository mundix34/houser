import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                        <button className ="button" onClick = {() => this.addProperty()}>Add</button>
                        <button className ="button" onClick = {() => this.clearInput()}>Cancel </button>

    
    
                    </form>
          <Link to='/'><button className='btn'>Cancel</button></Link>

        
      </div>
    );
  }
}

export default Wizard;
