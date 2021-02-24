import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


//const app = props => {
class App extends Component {

  // State should be used carefully
  state = {
    persons: [
      { name: 'Subhra', age: 22 },
      { name: 'Somnath', age: 53 },
      { name: 'Byleth', age: 26 }
    ]
  };

  add(a, b) {
    return a + b;
  }

  switchNameHandler = () => {
    // console.log('Was clicked!' )
    // DO NOT DO THiS: this.state.persons[0].name = 'Subhrajyoti';

    //for updating the state, esentially updates the dom
    this.setState({
      persons: [
        { name: 'Subhrajyoti', age: 22 },
        { name: 'Somnath', age: 53 },
        { name: 'Byleth', age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a Sunny App</h1>
        <h2>10 + 20 = {this.add(10, 20)}</h2>
        <p>Another para</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>My Hobbies: Programing, Cooking</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>

    );

    // Really cumbersome way to do it
    // return React.creatElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
