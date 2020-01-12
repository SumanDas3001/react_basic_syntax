import React from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, {StyleRoot} from 'radium';


class App extends React.Component {
  state = {
    persons: [
      {id: 1, name: 'boss', age: 24},
      {id: 2, name: 'mama', age: 25},
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
      backgroundColor: 'green',
      color: 'white',
      padding: '5px',
      font: 'inherit',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

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

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const dynmClass = [];

    if (this.state.persons.length <= 2){
      dynmClass.push('red')
    }

    if(this.state.persons.length <= 1){
      dynmClass.push('bold')
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hey, I'm React App</h1>
          <p className={dynmClass.join(' ')}>This is really working.</p>
          <button
            style={btnStyle}
            onClick={this.togglePersonHandler}>Switch Name</button>
          {person}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
