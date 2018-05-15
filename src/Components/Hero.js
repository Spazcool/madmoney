import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Primary bold title
            </h1>
            <h2 className="subtitle">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
