import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './Tools/Calculator'; // mock data WILL NEED TO BE CODED
import * as contentful from 'contentful';
import DummyDocs from './Tools/DummyDocs'; // mock data WILL NEED TO BE PASSED FROM CONTENTFUL
import Page from './Components/Page';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      assets: null,
      loaded: false,
      posts: null
    };
    this.nestURLs = this.nestURLs.bind(this);
  }
  client = contentful.createClient({
    space: 'dktgpvzygyep',
    accessToken: '7687e36de5d2b00b1747c9832727c68300a22523ef63abb84a4d6e04e1b6cd1d'
  })
  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
    // this.fetchAssets().then(this.setAssets);
  }
  componentDidUpdate() {
    if(this.state.loaded === false){
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
  // fetchAssets = () => this.client.getAssets();
  setAssets = (response) => {
    this.setState({
      assets: response.items
    })
  }
  nestURLs({match}){
    let data;
    if(match.path === "/tools"){
      data = Calculator;
    }else if(match.path === "/docs"){
      data = DummyDocs;
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
                loaded={this.state.loaded}
                path={props.match}
              />}
            />
          <Route exact path={match.path} render={() =>
              <Page
                data={data}
                displayBoth={false}
                loaded={this.state.loaded}
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
              loaded={this.state.loaded}
              path={"/"}
            />
          </Route>
          <Route path="/blogs" component={this.nestURLs}/>
          <Route path="/docs" component={this.nestURLs}/>
          <Route path="/tools" component={this.nestURLs}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
