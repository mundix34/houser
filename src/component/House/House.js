import React from 'react';
export default function House (props){
return (
    <div className = "house">
    <h1> House</h1>
    <p>{ props.properties}</p>
    <button className ="btn" onClick = {() => props.getProp()}>View Properties </button>

    </div>
        
    
)

}