import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
         
         <h1>Licznik w Reactjs</h1>

        </header>
        <Counter initValue = '10'/> 
        <Counter initValue = '20' /> 
        <Counter initValue = '40'/> 
      </div>
    );
  }
}

export default App;
