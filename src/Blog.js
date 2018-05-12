import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

class Blog extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title is -1">{this.props.data.title}</h1>
        <h6 className="subtitle">{this.props.data.date} <a href={this.props.data.path}>{this.props.data.path}</a></h6>
        <p>{this.props.data.content}</p>
      </div>
    );
  }
}

export default Blog;
