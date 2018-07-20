import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { connect } from "react-redux";
import { addPropertyName, addAddress, addCity, addState, addZip } from "../ducks/reducer";


class Wizard extends Component {
  

  render() {
    return (
      <div className="wizard one">
          <h1>Add New Listing 1</h1>
          <form className = "form">
                        <label> Property Name</label>
                        <input className = "input" onChange = {(e) => this.props.addPropertyName(e.target.value)}/>
                        <br/>
                        
                        <label> Address</label>
                         <input className = "input" onChange = {(e) => this.props.addAddress(e.target.value)}/>

                        <br/> 
                        <label> City</label>
                        <input className = "input" onChange = {(e) => this.props.addCity(e.target.value)}/>
                        
                        <br/> 
                        <label> State</label>
                        <input className = "input" onChange = {(e) => this.props.addState(e.target.value)}/>
                        
                        <br/> 
                        <label> ZipCode</label>
                        <input className = "input" onChange = {(e) => this.props.addZip(e.target.value)}/>
                        
                        <br/> 
                        <button className ="btn" onClick = {() => this.addProperty()}>Complete</button>
                        <button className ="btn" onClick = {() => this.clearInput()}>Cancel </button>

    
    
                    </form>
          <Link to='/'><button className='btn'>Cancel/To Dashboard</button></Link>

        
      </div>
    );
  }
}

function mapStateToProps(state){
    const {name, address, city, state, zip} = state

    return{
        name,
         address, 
         city, 
         state, 
         zip
    }
}
export default connect(mapStateToProps, {addPropertyName, addAddress, addCity, addState, addZip}) (StepOne) ; 