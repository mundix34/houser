import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { connect } from "react-redux";
import { addImageUrl } from "../ducks/reducer";


class Wizard extends Component {
  


  render() {
    return (
      <div className="wizard-two">
          <h1>Add New Listing 2</h1>
          <form>
                        <label> Image URL</label>
                        <input className = "input" onChange = {(e) => this.props.addImageUrl(e.target.value)}/>
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
  const {imageurl} = state

  return{
      imageurl
  }
}
export default connect(mapStateToProps, {addImageUrl}) (StepTwo) ; 