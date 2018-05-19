import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';
import Sections from './Sections';

class Page extends Component {
  render() {
    let sections =
      <Sections
        data={this.props.data}
        display={this.props.display}
        limit={5}
        loaded={this.props.loaded}
      />;
    let item =
      <Item
        data={this.props.data}
        display={this.props.display}
        limit={5}
        loaded={this.props.loaded}
        path={this.props.path}
      />;
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        {this.props.displayBoth ? item : sections}
        <Footer/>
      </div>
    );
  }
}

export default Page;
