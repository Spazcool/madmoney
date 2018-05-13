import './App.css';
import Content from './Content';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
