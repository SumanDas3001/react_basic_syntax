import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) =>{
  return(
    <div className="Person">
      <p onClick={props.click}> I am {props.name} and I am {props.age} years old and.</p>
      <p>{props.children}</p>
      <input type="text" placeholder="Enter your name" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Radium(person);
