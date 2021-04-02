import React from 'react';
import Radium from 'radium';
// no need for component since class is not being used

import './Person.css';
//have to manually add the css file used 


const person = (props) => {
    return (
        <div className = "Person">
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* having value without onchange would make the names be static and can't be changed */}
            <input type = "text" onChange = {props.changed} value={props.name}/>
        </div>    
    )
}



export default Radium(person);