import './App.css';
import Blog from './Routes/Blog';
import Blogs from './Routes/Blogs';
import * as contentful from 'contentful';
import Doc from './Routes/Doc';
import Docs from './Routes/Docs';
import Home from './Routes/Home';
import Loading from './Components/Loading';
import Tool from './Routes/Tool';
import Tools from './Routes/Tools';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Routing extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      posts: null
    };
  }
  client = contentful.createClient({
    space: 'dktgpvzygyep',
    accessToken: '7687e36de5d2b00b1747c9832727c68300a22523ef63abb84a4d6e04e1b6cd1d'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  componentDidUpdate() {
    if(this.state.loaded === false){
      this.setState({
        loaded: true
      })
    }
  }
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/"><Home data={this.state.posts} loaded={this.state.loaded}/></Route>
          <Route path="/blog" component={Blog}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/doc" component={Doc}/>
          <Route path="/docs" component={Docs}/>
          <Route path="/tool" component={Tool}/>
          <Route path="/tools" component={Tools}/>
        </div>
      </Router>
    )
  }
}

export default Routing;
