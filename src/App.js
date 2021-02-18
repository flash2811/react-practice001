import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a sunny2 App</h1>
       <h2>{this.add(10, 20)}</h2> 
      </div>

    );
  }
}

export default App;
