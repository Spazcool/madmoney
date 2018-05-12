import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <ul className="NavBar">
        <a href="/home"><li>Home</li></a>
        <a href="/tools"><li>Tools</li></a>
        <a href="/archive"><li>Archive</li></a>
        <a href="/docs"><li>Docs</li></a>
        <a href="/other"><li>Other</li></a>
      </ul>
    );
  }
}

export default NavBar;
