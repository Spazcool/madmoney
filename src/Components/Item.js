import './../App.css';
import * as contentful from 'contentful';
import React, { Component } from 'react';
import Section from './Section';
import Sections from './Sections';

class Item extends Component {
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
    if (this.state.posts){
      return (
        <div className="Item">
          <div className="tile is-ancestor">
            <Section
              data={this.state.posts}
              type={this.props.type}
            />
            <Sections
              data={this.state.posts}
              type={this.props.type}
            />
          </div>
        </div>
      )
    }
    return(
      <div className="Loading">
        Loading
      </div>
    )
  }
}
export default Item;
