import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: "Chris", age: 54},
      {name: "Sheri", age: 56},
      {name: "Bill", age: 60}
    ],
    otherState: 'Something else!'
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked!');
    // this.state.people[0].name = 'Christopher';
    this.setState({
      people: [
        {name: "Christopher", age: 55},
        {name: "Sheryl", age: 57},
        {name: newName, age: 61}
      ]
    });
  }

  render() {
      return (
      <div className="App">
        <h1>Some people</h1>
        <p>testing</p>
        <button onClick={() => this.switchNameHandler('Chris!!!')}>Switch</button>
        <Person name ={
          this.state.people[0].name}
          age={this.state.people[0].age} />
        <Person
          name ={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler.bind(this, 'Sheryl!!!')}>Is a massage therapist!</Person>
        <Person
          name ={this.state.people[2].name}
          age={this.state.people[2].age} />
      </div>
      );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'testing'));
  }
}

export default App;
