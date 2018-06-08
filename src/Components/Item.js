import './../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mission from './Mission';
import React, { Component } from 'react';
import Section from './Section';
import Sections from './Sections';

class Item extends Component {
  render() {
    return(
      <Switch>
        <Route path='/blogs' render={() =>
          <Sections
            data={this.props.data}
            displayBoth={false}
            loaded={this.props.loaded}
          />}
        />
        <Route path='/docs' render={() =>
          <Sections
            data={this.props.docs}
            displayBoth={false}
            loaded={this.props.loaded}
          />}
        />
        <Route path='/tools' render={() =>
          <Sections
            data={this.props.tools}
            displayBoth={false}
            loaded={this.props.loaded}
          />}
        />
      </Switch>
    )
  }
}

export default Item;
