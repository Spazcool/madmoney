import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Item from './Components/Item';
import NavBar from './Components/NavBar';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <body>
          <Item
            type={"blog"}
          />
        </body>
        <Footer/>
      </div>
    );
  }
}

export default App;
