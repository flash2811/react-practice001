import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a Sunny App</h1>
         <h2>10 + 20 = {this.add(10, 20)}</h2> 
         <p>Another para</p>

          <Person name="Subhra" age="22"/>
          <Person name="Somnath" age="53">My Hobbies: Programing</Person> 
          <Person name="Byleth" age="25"/>
          <Person/>

      </div>

    );

    // Really cumbersome way to do it
    // return React.creatElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
