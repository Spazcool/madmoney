import './../App.css';
import 'bulma/css/bulma.css';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faFileArchive, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {
  render() {
    // // TODO: REFATOR THE FUNCTION TO BE REACT FRIENDLY, ADD STATE?
    document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
      var $navbarBurgers = [].slice.call(document.querySelectorAll('.burger-slice'));
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            // Get the target from the "data-target" attribute
            var target = $el.id;
            var $target = document.getElementById(target);
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            // TODO STILL NOT TOGGLING, NOODLE HERE
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
    fontawesome.library.add(solid, faTwitter, faFacebook, faBook, faRss, faToolbox, faFileArchive);
    return (
      <nav className="navbar is-fixed-top is-white" aria-label="dropdown navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <div className="navbar-item"><img src="https://bulma.io/images/bulma-logo.png" alt="Madmoney" width="112" height="28"/></div>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span className="burger-slice" id="Fart" aria-hidden="true">Fart</span>
            <span className="burger-slice" id="Burp" aria-hidden="true">Burp</span>
            <span className="burger-slice" id="Sneeze" aria-hidden="true">Sneeze</span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/docs"><span className="icon"><i className="fas fa-book"></i></span> Docs</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/docs/1">Docs 1</a>
              <a className="navbar-item" href="/docs/2">Docs 2</a>
              <a className="navbar-item" href="/docs/3">Docs 3</a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span> Tools</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/tools/1">Tools 1</a>
              <a className="navbar-item" href="/tools/2">Tools 2</a>
              <a className="navbar-item" href="/tools/2">Tools 3</a>
            </div>
          </div>
          <a className="navbar-item" href="/archive"><span className="icon"><i className="fas fa-rss"></i></span> Archive</a>
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button"
                  data-social-network="Facebook"
                  data-social-action="follow"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://facebook.com/Madmoney">
                  <span className="icon"><i className="fab fa-facebook"></i></span>
                  <span>Follow</span>
                </a>
              </p>
              <p className="control">
                <a className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Madmoney&amp;hashtags=madmoney&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span className="icon"><i className="fab fa-twitter"></i></span>
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
