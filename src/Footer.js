import './App.css';
import 'bulma/css/bulma.css';
import solid, {faHeart} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    fontawesome.library.add(solid, faHeart);
    return (
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Madmoney</strong> is designed with <span class="icon"><i class="fas fa-heart"></i></span> by <a href="https://www.spazcool.com">Douglas Wright</a>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
