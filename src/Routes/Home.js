import './../App.css';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import Loading from './../Components/Loading';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    if(this.props.loaded === true){
      return (
        <div className="App">
          <header>
            <NavBar/>
            <Hero/>
          </header>
          <Item
            data={this.props.data}
            limit={5}
            type={"blog"}
          />
          <Footer/>
        </div>
      );
    }
    return(
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <Loading/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
