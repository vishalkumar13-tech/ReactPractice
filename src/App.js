import React, { Component } from 'react'

import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {
  render(){

    return (
      <div className="App" >
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        <EventBind/>
          {/* <Counter/> */}
          {/* <Greet name="Bruce" heroName="Superman" /> */}
        {/* <Message/> */}
         {/* <Greet name="Bruce" heroName="Superman" >
            <p >This is children props</p> 
         </Greet>
         <Greet name="clark" heroName="Batman" >
            <button>Action</button>
         </Greet>
         <Greet name="Diana" heroName="Wonder women" />
         <Welcome name="Bruce" heroName="Superman"/>
         <Welcome name="clark" heroName="Batman"/>
         <Welcome name="Diana" heroName="Wonder women"/> */}
          {/* <Welcome name="Bruce" heroName="Superman"/> */}
         {/* <Hello /> */}
    </div>
  );
}
}

export default App;
