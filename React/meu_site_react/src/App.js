import './App.css';
import React from 'react'
import './components/HelloReact'
import HelloReact from './components/HelloReact';
import HelloDev from './components/HelloDev';
import HelloClass from './components/HelloClass';
import HelloPeople from './components/HelloPeople';

function App() {
  return (
    <div className="App">
      <HelloReact />
      <HelloClass/>
      <HelloDev dev_name="Luiz"/>
      <HelloPeople name="Gonzaga" age ="12"/>
    </div>
  );
}

export default App;