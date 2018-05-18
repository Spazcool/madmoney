import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        Need to limit the view to just one blog here
        <Item type={"blog"} limit={1}/>
        <Footer/>
      </div>
    );
  }
}

export default Blog;
