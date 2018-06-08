import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as contentful from 'contentful';
import Hero from './Components/Hero';
import Item from './Components/Item';
import NavBar from './Components/NavBar';
import Page from './Components/Page';
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
    this.nestURLs = this.nestURLs.bind(this);
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

  nestURLs({match}){
    let data;
    if(match.path === "/tools"){
      data = this.state.tools;
    }else if(match.path === "/docs"){
      data = this.state.docs;
    }else{
      data = this.state.posts;
    }
    //TODO GET THE CALCULATOR WORKING AS A NESTED URL OF /TOOLS
    console.log('arf', match);

    return(
      <Router>
        <Switch>
          <Route path={`${match.path}/:topicId`} render={(props) =>
              <Page
                data={data}
                displayBoth={true}
                docs={this.state.docs}
                loaded={this.state.loaded}
                path={props.match}
                tools={this.state.tools}
              />}
            />
          <Route exact path={match.path} render={() =>
              <Page
                data={data}
                displayBoth={false}
                docs={this.state.docs}
                loaded={this.state.loaded}
                tools={this.state.tools}
              />}
            />
        </Switch>
      </Router>
    )
  }

  render(){
    return(
      <Router>
        <div>
          <header>
            <NavBar
              docs={this.state.docs}
              loaded={this.state.loaded}
              tools={this.state.tools}
            />
            <Hero/>
          </header>
          <Item
            data={this.state.posts}
            displayBoth={false}
            docs={this.state.docs}
            loaded={this.state.loaded}
            tools={this.state.tools}
          />
        </div>
      </Router>
    )
  }
}

export default App;
