import {BrowserRouter as Router} from 'react-router-dom';
import * as contentful from 'contentful';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import React, { Component } from 'react';
import ToolLinks from './Tools/Links'; //DUMB OBJ FOR THE LINKS

class App extends Component {
  constructor() {
    super();
    this.state = {
      docs: null,
      loaded: false,
      posts: null,
      tools: ToolLinks
    };
  }

  client = contentful.createClient({
    space: 'dktgpvzygyep',
    accessToken: '7687e36de5d2b00b1747c9832727c68300a22523ef63abb84a4d6e04e1b6cd1d'
  })

  createPath(type, date, title){
    let _type = type === "Entry" ? "blogs" : "docs";
    let _date = date.split(/[-T]/);
    let _title = title.replace(/ /g,"_");
    let _path = '/' + _type + '/' + _date[0] + '/' + _date[1] + '/' + _date[2] + '/' + _title;
    return _path;
  }

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
    // MODIFY POSTS DATA TO LESSEN USER INPUT
    let items = response.items;
    items.forEach((item, index) => {
      item.fields.date = item.sys.createdAt;
      item.fields.path = this.createPath(item.sys.type, item.sys.createdAt, item.fields.title);
    })
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
      item.fields.path = this.createPath(item.sys.type, item.sys.createdAt, item.fields.title);
    });
    this.setState({
      docs: items
    })
  }

  render(){
    return(
      <Router>
        <div className="App">
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
