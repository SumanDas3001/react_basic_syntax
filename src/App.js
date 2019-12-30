import React, {Component} from 'react';
// import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

// const App = () => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name: 'suman', age: 12},
//       {name: 'amit', age: 23},
//       {name: 'arun', age: 24}
//     ]
//   });
  
//   console.log(personState);

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         {name: 'Amit', age: 56},
//         {name: 'Amit', age: 56},
//         {name: 'Amit', age: 56}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hey, I'm React App</h1>
//       <p>This is really working.</p>
//       <button onClick={switchNameHandler}>Switch Name</button> 
//       <Person 
//         name={personState.persons[0].name} 
//         age={personState.persons[0].age} 
//       />
//       <Person 
//         name={personState.persons[1].name} 
//         age={personState.persons[1].age}
//       />
//       <Person name={personState.persons[2].name} age={personState.persons[2].age}>
//         My Hobbies: Racing
//       </Person>
//     </div>
//   );
// }


class App extends Component {
  state = {
    persons: [
      {name: 'suman', age: 24},
      {name: 'rahul', age: 25},
      {name: 'kaka', age: 29}
    ],

    otherState: 'this is other state'
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 56},
        {name: 'Amit', age: 56},
        {name: 'Amit', age: 56}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hey, I'm React App</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> 
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Max')}>My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
