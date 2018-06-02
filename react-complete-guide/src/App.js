import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
      return (
      <div className="App">
        <h1>Some people</h1>
        <p>testing</p>
        <Person name ="Chris" age="54" />
        <Person name ="Sheri" age="56">And I'm a massage therapist!</Person>
        <Person name ="Bill" age="60" />
      </div>
      );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'testing'));
  }
}

export default App;
