import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import bulmaLogo from './../Imgs/made-with-bulma--semiblack.png';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faCode, faEnvelope, faHeart, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class Footer extends Component {
  render() {
    fontawesome.library.add(solid, faBook, faCode, faEnvelope, faFacebook, faHeart, faRss, faToolbox, faTwitter);

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p className="title is-5"><a href="/">Home</a></p>
                <p><a href="/docs"><span className="icon"><i className="fas fa-book"></i></span>Docs</a></p>
                <p><a href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span>Tools</a></p>
                <p><a href="/blogs"><span className="icon"><i className="fas fa-rss"></i></span>Archive</a></p>
              </div>
              <div className="is-divider-vertical"></div>
              <div className="column">
                <p className="title is-5">Share</p>
                <p><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.madmoney.com"><span className="icon"><i className="fab fa-facebook"></i></span>Share</a></p>
                <p><a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.madmoney.com%2F&ref_src=twsrc%5Etfw&text=Check%20this%20out&tw_p=tweetbutton&url=http%3A%2F%2Fwww.madmoney.com%2F&via=madmoney"><span className="icon"><i className="fab fa-twitter"></i></span>Tweet</a></p>
              </div>
              <div className="is-divider-vertical"></div>
              <div className="column">
                <p className="title is-5">Contact</p>
                <p><a href="http://www.facebook.com/madmoney"><span className="icon"><i className="fab fa-facebook"></i></span>facebook/madmoney</a></p>
                <p><a href="http://www.twitter.com/madmoney"><span className="icon"><i className="fab fa-twitter"></i></span>@madmoney</a></p>
                <p><a href="mailto:madmoney@live.fr?subject=I saw your site..."><span className="icon"><i className="fas fa-envelope"></i></span>madmoney@live.fr</a></p>
              </div>
              <div className="is-divider-vertical"></div>
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
