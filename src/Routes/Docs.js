import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';
import Sections from './../Components/Sections';

class Docs extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <Sections
          data={this.props.data}
          loaded={this.props.loaded}
          type={"doc"}
        />
        <Footer/>
      </div>
    );
  }
}

export default Docs;
