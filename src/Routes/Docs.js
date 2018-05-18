import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';

class Docs extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        Need to put docs section here
        <Footer/>
      </div>
    );
  }
}

export default Docs;
