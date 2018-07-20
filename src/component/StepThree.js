import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// import './App.css';

class Wizard extends Component {
  


  render() {
    return (
      <div className="wizard-three">
          <h1>Add New Listing 3</h1>
          <form>
                        <label> Monthly Mortgage Amount</label>
                        <input className = "input" onChange = {(e) => this.addMortgageAmount(e.target.value)}/>
                        <br/>
                        
                        <label> Desired Monthly Rent</label>
                         <input className = "input" onChange = {(e) => this.addRent(e.target.value)}/>

                        <br/> 
                        
                        <button className ="btn" onClick = {() => this.addProperty()}>Complete</button>
                        <button className ="btn" onClick = {() => this.clearInput()}>Cancel </button>

    
    
                    </form>
          <Link to='/'><button className='btn'>Cancel/To Dashboard</button></Link>

        
      </div>
    );
  }
}

export default StepThree;
