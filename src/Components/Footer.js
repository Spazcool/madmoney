import './../App.css';
import 'bulma/css/bulma.css';
import bulmaLogo from './../Imgs/made-with-bulma--semiblack.png';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faCode, faFileArchive, faHeart, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class Footer extends Component {
  render() {
    fontawesome.library.add(solid, faBook, faCode, faHeart, faToolbox, faRss, faTwitter, faFacebook);

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p className="title is-5 has-text-black-bis"><a href="/">Home</a></p>
                <p><a href="/docs"><span className="icon"><i className="fas fa-book"></i></span>Docs</a></p>
                <p><a href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span>Tools</a></p>
                <p><a href="/blogs"><span className="icon"><i className="fas fa-rss"></i></span>Archive</a></p>
              </div>
              <div className="column">
                <p className="title is-5">Socialize</p>
                <p><a href="www.facebook.com"><span className="icon"><i className="fab fa-facebook"></i></span>Facebook</a></p>
                <p><a href="www.twitter.com"><span className="icon"><i className="fab fa-twitter"></i></span>Twitter</a></p>
              </div>
              <div className="column">
                <p className="title is-5">Checkout</p>
                <p><a href="www.biggerpockets.com">BiggerPockets</a></p>
                <p><a href="www.leboncoin.com">Leboncoin</a></p>
              </div>
              <div className="column">
                <p>
                  <span className="icon"><i className="fas fa-code"></i></span> with <span className="icon"><i className="fas fa-heart"></i></span> by <a href="https://www.spazcool.com">Douglas Wright</a>.
                </p>
                <p>
                  <a href="https://bulma.io">
                    <img src={bulmaLogo} alt="Made with Bulma" style={{height:"2.5em"}}/>
                  </a>
                </p>
              </div>
            </div>
            <p>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
