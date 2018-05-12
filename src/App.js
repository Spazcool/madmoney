import Content from './Content';
import NavBar from './NavBar';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <img width="100%" src="http://www.advisorsliving.com/wp-content/uploads/2014/03/back-bay-boston-brownstone-homes1-1200x705.jpg"/>
        </header>
        <Content/>
      </div>
    );
  }
}

export default App;
