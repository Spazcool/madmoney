import Blog from './Blog';
import * as contentful from 'contentful';
// import ContentNav from './ContentNav';
import React, { Component } from 'react';

class Content extends Component {
  state = {
    posts: []
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
    return (
      <div className="Content">
        <div className="Blogs">
          {this.state.posts.map(({fields}, i) =>
            <Blog
              key={i}
              data={fields}
            />
          )}
        </div>
        <ul className="ContentNav">
          {this.state.posts.map(({fields}, i) =>
            <a href={fields.path}><li key={i}>{fields.title}{fields.date}</li></a>
          )}
        </ul>
      </div>
    )
  }
}
export default Content;
