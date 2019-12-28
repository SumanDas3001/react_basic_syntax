import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Hey, I'm React App</h1>
      <p>This is really working.</p>
      <Person name='suman' age='23' />
      <Person name='rahul' age='28'/>
      <Person name='amit' age='33'/>
    </div>
  );
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\m React App!!!'));
}

export default App;
