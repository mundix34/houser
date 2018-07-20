import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './App.css';

class Wizard extends Component {
  

  render() {
    return (
      <div className="wizard one">
          <h1>Add New Listing 1</h1>
          <form className = "form">
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
          <Link to='/'><button className='btn'>Cancel/To Dashboard</button></Link>

        
      </div>
    );
  }
}

export default StepOne;
