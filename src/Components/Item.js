import './../App.css';
import React, { Component } from 'react';
import Section from './Section';
import Sections from './Sections';

class Item extends Component {
  render() {
    return(
      <div className="Item">
        <div className="tile is-ancestor">
          <Section
            data={this.props.data}
            limit={this.props.limit}
            loaded={this.props.loaded}
            path={this.props.path}
            type={this.props.type}
          />
          <Sections
            data={this.props.data}
            loaded={this.props.loaded}
            type={this.props.type}
          />
        </div>
      </div>
    )
  }
}
export default Item;
