import React, { Component } from 'react';
import './App.css';

class ContentNav extends Component {
  render() {
    return (
      <div className="ContentNav">
        <ul>
          {this.props.data.map((entry, index) =>
            <li key={index}>{entry.path}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ContentNav;
