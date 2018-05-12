import './App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar is-fixed-top is-info" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Madmoney" width="112" height="28"/>
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Nav
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <a href="/docs">Docs</a>
            </a>
            <a class="navbar-item">
              <a href="/tools">Tools</a>
            </a>
            <a class="navbar-item">
              <a href="/archive">Archive</a>
            </a>
            <hr class="navbar-divider"></hr>
            <div class="navbar-item">
              <a href="/other">Other</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Madmoney&amp;hashtags=madmoney&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
