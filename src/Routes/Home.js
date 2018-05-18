import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import Loading from './../Components/Loading';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <NavBar/>
            <Hero/>
          </header>
          <Item
            data={this.props.data}
            limit={5}
            loaded={this.props.loaded}
            type={"blog"}
          />
          <Footer/>
        </div>
      );
    }
}

export default Home;
