import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './Tools/Calculator'; // mock data WILL NEED TO BE CODED
import * as contentful from 'contentful';
import Page from './Components/Page';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      docs: null,
      loaded: false,
      posts: null,
      tools: Calculator
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
    this.setState({
      posts: response.items
    })
  }
  fetchDocs = () => this.client.getAssets();
  setDocs = (response) => {
    // MODIFY ASSET DATA TO FIT SECTION COMPONENT DATA MODEL
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
      data = Calculator;
    }else if(match.path === "/docs"){
      data = this.state.docs;
    }else{
      data = this.state.posts;
    }
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
                tools={Calculator}
              />}
            />
          <Route exact path={match.path} render={() =>
              <Page
                data={data}
                displayBoth={false}
                docs={this.state.docs}
                loaded={this.state.loaded}
                tools={Calculator}
              />}
            />
        </Switch>
      </Router>
    )
  }
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Page
              data={this.state.posts}
              displayBoth={true}
              docs={this.state.docs}
              loaded={this.state.loaded}
              path={"/"}
              tools={Calculator}
            />
          </Route>
          <Route path="/blogs" component={this.nestURLs}/>
          <Route path="/docs" component={this.nestURLs}/>
          <Route path="/tools" component={this.nestURLs}/>
          <Route exact path="/test">
            <Page
              data={this.state.tools}
              displayBoth={true}
              docs={this.state.docs}
              loaded={this.state.loaded}
              path={"test"}
              tools={this.state.tools}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
