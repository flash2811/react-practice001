import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


//const app = props => {
class App extends Component {

  // State should be used carefully
  state = {
    persons: [
      { id:'qwerty', name: 'Subhra', age: 22 },
      { id:'asdfgh', name: 'Somnath', age: 53 },
      { id:'zxcvbn', name: 'Byleth', age: 26 }
    ],
    
    showPersons: false
  
  }

  add(a, b) {
    return a + b;
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!' )
  //   // DO NOT DO THiS: this.state.persons[0].name = 'Subhrajyoti';

  //   //for updating the state, esentially updates the dom
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 22 },
  //       { name: 'Somnath', age: 53 },
  //       { name: 'Byleth', age: 26 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Subhra", age: 22 },
        { name: event.target.value, age: 53 },
        { name: 'Byleth', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // makes a copy of the array, leaves the old array alone
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHander = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // inline style 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pinter'
    }


    // this is the prefered way
    // to do conditionals 
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age ={person.age}
              key = {person.id} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Subhra!')}
            changed={this.nameChangedHandler}>My Hobbies: Programing, Cooking</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }
    

    return (
      <div className="App">
        <h1>Hi, I'm a Sunny App</h1>
        <h2>10 + 20 = {this.add(10, 20)}</h2>
        <p>Another para</p>

        {/* this could be inefficient */}
        <button 
        style={style}
        onClick={this.togglePersonsHander}>Switch Name</button>

        {persons}

        {/* while the below code works, it is not the most clean way to do conditionals */}
        {/* { this.state.showPersons ?
          if this is true then do the things in the div 
          this is converted into react create
          below in the div is just plain js */}
           {/* : null // otherwise do null */}
        {/* } */}

      </div>

    );

    // Really cumbersome way to do it
    // return React.creatElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  }
}

export default App;
