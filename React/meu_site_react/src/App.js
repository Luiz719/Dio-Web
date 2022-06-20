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
import StateColor from './components/StateColor';
import StateCar from './components/StateCar';
import StatePerson from './components/StatePerson';
import StateClock from './components/StateClock';
import FormExample from './components/FormExample';
import FormMultiple from './components/FormMultiple';

function App() {
  return (
    <div>
    <div className="App">
      <HelloReact />
      <HelloClass name ="Classe A"/>
      <HelloDev dev_name="Luiz"/>
      <HelloPeople name="Gonzaga" age ="12"/>
      <HelloCalc />
      <Car/>
      <PersonClass name="Luiz"/>
    </div>
     <div className="App">
      <StateColor color="azul"/>
      <StateCar />
      <StatePerson nome="Joao" profissao="Pintor" idade={33} />
      <StateClock />
     </div>
     <FormExample/>
     <FormMultiple/>
   </div>
  );
}

export default App;