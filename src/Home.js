import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
          This is home
        <Footer/>
      </div>
    );
  }
}

export default Home;
