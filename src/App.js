import Content from './Content';
import NavBar from './NavBar';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MadMoney</h1>
          <NavBar/>
        </header>
        <Content/>
      </div>
    );
  }
}

export default App;
