import './App.css';
import React from 'react'
import './components/HelloReact'
import HelloReact from './components/HelloReact';
import HelloDev from './components/HelloDev';
import HelloClass from './components/HelloClass';
import HelloPeople from './components/HelloPeople';
import HelloCalc from './components/HelloCalc';
import Car from './components/Car';
import PersonClass from './components/PersonClass';

function App() {
  return (
    <div className="App">
      <HelloReact />
      <HelloClass name ="Classe A"/>
      <HelloDev dev_name="Luiz"/>
      <HelloPeople name="Gonzaga" age ="12"/>
      <HelloCalc />
      <Car/>
      <PersonClass name="Luiz"/>
    </div>
  );
}

export default App;