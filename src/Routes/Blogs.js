import './../App.css';
import * as contentful from 'contentful';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import Item from './../Components/Item';
import NavBar from './../Components/NavBar';
import React, { Component } from 'react';
import Sections from './../Components/Sections';

class Blogs extends Component {
  state = {
    posts: null
  }
  client = contentful.createClient({
    space: 'dktgpvzygyep',
    accessToken: '7687e36de5d2b00b1747c9832727c68300a22523ef63abb84a4d6e04e1b6cd1d'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    if(this.state.posts){
    return (
      <div className="App">
        <header>
          <NavBar/>
          <Hero/>
        </header>
        <Sections
          data={this.state.posts}
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
      Loading
      <Footer/>
    </div>
  )
  }
}

export default Blogs;
