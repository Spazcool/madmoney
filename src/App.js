import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import * as contentful from 'contentful';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import React, { Component } from 'react';
import Tools from './Tools/Tools';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      docs: null,
      loaded: false,
      posts: null,
      tools: Tools
    };
  }

  client = contentful.createClient({
    space: 'dktgpvzygyep',
    accessToken: '7687e36de5d2b00b1747c9832727c68300a22523ef63abb84a4d6e04e1b6cd1d'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
    this.fetchDocs().then(this.setDocs);
  }

  componentDidUpdate() {
    if(this.state.loaded === false && this.state.docs !== null && this.state.posts !== null){
      this.setState({
        loaded: true
      })
    }
  }

  fetchPosts = () => this.client.getEntries();
  setPosts = (response) => {
    let items = response.items;
    this.setState({
      posts: items
    })
  }

  fetchDocs = () => this.client.getAssets();
  setDocs = (response) => {
    // MODIFY DOCS/ASSET DATA TO FIT POSTS DATA MODEL
    let items = response.items;
    items.forEach((item, index) => {
      item.fields.content = item.fields.file.contentType;
      item.fields.date = item.sys.createdAt;
      item.fields.download = item.fields.file.url;
      item.fields.id = item.sys.id;
      item.fields.path = '/docs/doc' + (index + 1);
    });
    this.setState({
      docs: items
    })
  }

  render(){
    return(
      <Router>
        <div>
          <NavBar
            docs={this.state.docs}
            loaded={this.state.loaded}
            tools={this.state.tools}
          />
          <Hero/>
          <Main
            docs={this.state.docs}
            loaded={this.state.loaded}
            posts={this.state.posts}
            tools={this.state.tools}
          />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
