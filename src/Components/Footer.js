import './../App.css';
import 'bulma/css/bulma.css';
import bulmaLogo from './../Imgs/made-with-bulma--semiblack.png';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faFileArchive, faHeart, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class Footer extends Component {
  render() {
    fontawesome.library.add(solid, faBook, faHeart, faToolbox, faRss, faTwitter, faFacebook);

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p className="title is-5">Home</p>
                <p><a><span className="icon"><i className="fas fa-book"></i></span>Docs</a></p>
                <p><a><span className="icon"><i className="fas fa-toolbox"></i></span>Tools</a></p>
                <p><a><span className="icon"><i className="fas fa-rss"></i></span>Archive</a></p>
              </div>
              <div className="column">
                <p className="title is-5">Socialize</p>
                <p><a><span className="icon"><i className="fab fa-facebook"></i></span>Facebook</a></p>
                <p><a><span className="icon"><i className="fab fa-twitter"></i></span>Twitter</a></p>
              </div>
              <div className="column">
                <p className="title is-5">Checkout</p>
                <p><a>BiggerPockets</a></p>
                <p><a>Leboncoin</a></p>
              </div>
              <div className="column">
                <p><a href="https://bulma.io">
                    <img src={bulmaLogo} alt="Made with Bulma" style={{height:"2em"}}/>
                  </a></p>
              </div>
            </div>
            <p>
              <strong>Madmoney</strong> is designed with <span className="icon"><i className="fas fa-heart"></i></span> by <a href="https://www.spazcool.com">Douglas Wright</a>.
            </p>
          </div>
        </div>


      </footer>
    );
  }
}

export default Footer;
