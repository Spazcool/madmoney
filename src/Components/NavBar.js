import './../App.css';
import 'bulma/css/bulma.css';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faFileArchive, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {
  render() {
    fontawesome.library.add(solid, faTwitter, faFacebook, faBook, faRss, faToolbox, faFileArchive);
    return (
      <nav class="navbar is-fixed-top is-white" aria-label="dropdown navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <a class="navbar-item" href="/"><img src="https://bulma.io/images/bulma-logo.png" alt="Madmoney" width="112" height="28"/></a>
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/docs"><span class="icon"><i class="fas fa-book"></i></span> Docs</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/docs/1">Docs 1</a>
            <a class="navbar-item" href="/docs/2">Docs 2</a>
            <a class="navbar-item" href="/docs/3">Docs 3</a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/tools"><span class="icon"><i class="fas fa-toolbox"></i></span> Tools</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" href="/tools/1">Tools 1</a>
            <a class="navbar-item" href="/tools/2">Tools 2</a>
            <a class="navbar-item" href="/tools/2">Tools 3</a>
          </div>
        </div>
        <a class="navbar-item" href="/archive"><span class="icon"><i class="fas fa-rss"></i></span> Archive</a>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button"
                  data-social-network="Facebook"
                  data-social-action="follow"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://facebook.com/Madmoney">
                  <span class="icon"><i class="fab fa-facebook"></i></span>
                  <span>Follow</span>
                </a>
              </p>
              <p class="control">
                <a class="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Madmoney&amp;hashtags=madmoney&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon"><i class="fab fa-twitter"></i></span>
                  <span>Tweet</span>
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
