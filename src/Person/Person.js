import React from 'react';
// no need for component since class is not being used


const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>    
    )
}



export default person;