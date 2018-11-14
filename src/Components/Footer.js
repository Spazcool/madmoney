import './../App.css';
import 'bulma/css/bulma.css';
// import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import bulmaLogo from './../Imgs/made-with-bulma--semiblack.png';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faCode, faEnvelope, faHeart, faNewspaper, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class Footer extends Component {
  render() {
    fontawesome.library.add(solid, faBook, faCode, faEnvelope, faFacebook, faHeart, faNewspaper, faRss, faToolbox, faTwitter);

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p className="title is-5"><a href="/">Accueil</a></p>
                <p><a href="/docs"><span className="icon"><i className="fas fa-book"></i></span>Documents</a></p>
                <p><a href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span>Outils</a></p>
                <p><a href="/blogs"><span className="icon"><i className="fas fa-newspaper"></i></span>Articles</a></p>
              </div>
              <div className="is-divider-vertical"></div>
              <div className="column">
                <p className="title is-5">Partager</p>
                <p><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.madmonnaie.fr"><span className="icon"><i className="fab fa-facebook"></i></span>Partager</a></p>
                <p><a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.madmonnaie.fr%2F&ref_src=twsrc%5Etfw&text=Check%20this%20out&tw_p=tweetbutton&url=http%3A%2F%2Fwww.madmonnaie.fr%2F&via=madmonnaie"><span className="icon"><i className="fab fa-twitter"></i></span>Tweet</a></p>
              </div>
              <div className="is-divider-vertical"></div>
              <div className="column">
                <p className="title is-5">Suivre</p>
                <p><a href="http://www.facebook.com/madmonnaie"><span className="icon"><i className="fab fa-facebook"></i></span>facebook/madmonnaie</a></p>
                <p><a href="http://www.twitter.com/madmonnaie"><span className="icon"><i className="fab fa-twitter"></i></span>@madmonnaie</a></p>
                <p><a href="https://zapier.com/engine/rss/3841173/madmonnaie/"><span className="icon"><i className="fas fa-rss"></i></span>RSS</a></p>
              </div>
              <div className="is-divider-vertical"></div>
              <div className="column">
                <p>
                  <span className="icon"><i className="fas fa-code"></i></span> avec <span className="icon"><i className="fas fa-heart"></i></span> par <a href="https://www.spazcool.com">Douglas Wright</a>.
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
