import './../App.css';
import React, { Component } from 'react';
import Section from './Section';
import Sections from './Sections';

class Item extends Component {
  render() {
    return(
      <div className="Item">
          <Section
            data={this.props.data}
            loaded={this.props.loaded}
            path={this.props.path}
          />
          <Sections
            data={this.props.data}
            loaded={this.props.loaded}
          />
      </div>
    )
  }
}
export default Item;
