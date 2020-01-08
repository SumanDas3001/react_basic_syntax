import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

state = {
  persons: [
    {id: 1, name: 'suman', age: 24},
    {id: 2, name: 'rahul', age: 25},
    {id: 3, name: 'kaka', age: 29}
  ],
  otherState: 'this is other state',
  showPerson: false
}

nameChnagedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
}

deletePersonHandler = (personIndex) => {
  const person = this.state.persons;
  person.splice(personIndex, 1);
  this.setState({persons: person})
}

togglePersonHandler = () => {
  let doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow});
}

render(){
  const btnStyle = {
    border: '1px solid blue',
    backgroundColor: 'white',
    padding: '5px',
    font: 'inherit',
    cursor: 'pointer'
  }

  let person = null;

  if( this.state.showPerson ){
    person = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChnagedHandler(event, person.id)} />
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hey, I'm React App</h1>
      <p>This is really working.</p>
      <button
        style={btnStyle}
        onClick={this.togglePersonHandler}>Switch Name</button>
      {person}
    </div>
  );
}
}
