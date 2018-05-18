import './../App.css';
import data from './../Tools/Calculator'; // mock data
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';
import Sections from './../Components/Sections';

class Tools extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <Sections
          data={data}
          loaded={this.props.loaded}
          type={"tool"}
        />
        <Footer/>
      </div>
    );
  }
}

export default Tools;
