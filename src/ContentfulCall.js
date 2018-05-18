import * as contentful from 'contentful';
import React, { Component } from "react";

class ContentfulCall extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      placeholder: "Loading",
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
  fetchPosts = () => this.client.getEntries();
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    const { posts, loaded, placeholder } = this.state;
    return loaded ? posts : placeholder;
  }
}

export default ContentfulCall;
