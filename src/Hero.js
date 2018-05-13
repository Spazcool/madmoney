import './App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Primary bold title
            </h1>
            <h2 class="subtitle">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
