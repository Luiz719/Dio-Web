import './App.css';
import React from 'react';
import './components/HelloReact';
import HelloPeople from './components/HelloPeople';
import HelloCalc from './components/HelloCalc';
import PersonClass from './components/PersonClass';
import StateColor from './components/StateColor';
import StateCar from './components/StateCar';
import StatePerson from './components/StatePerson';
import StateClock from './components/StateClock';
import FormExample from './components/FormExample';
import FormMultiple from './components/FormMultiple';
import UseEffectClass from './components/UseEffectClass'
import UseEffectFunction from './components/UseEffectFunction';
import UseContext from './components/UseContext'
import UseRef from './components/UseRef';
import LazyFunction from './components/LazyFunction';
import SetStateFunctionPrev from './components/SetStateFunctionPrev';
import PrevState from './components/PrevState';
import FetchAPIData from './components/api/FetchAPIData';
import TodoList from './components/itemsList/TodoList'
import TodoListCallback from './components/itemsList/TodoListCallback'
import CallbackMemo from './components/CallbackMemo';

function App() {
  return (
    <div>
    <div className="App">
      <HelloPeople name="Gonzaga" age ="12"/>
      <HelloCalc />
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
     <div className="App">
      <UseEffectClass />
      <UseEffectFunction />
      <UseContext />
      <UseRef />
    </div>
    <div className="App">
      <LazyFunction/>
      <PrevState/>
      <SetStateFunctionPrev/>
    </div>
    <div className="App">
      <FetchAPIData />
      <TodoList />
      <TodoListCallback />
      <CallbackMemo />
    </div>
   </div>
  );
}

export default App;