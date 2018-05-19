import './../App.css';
import 'bulma/css/bulma.css';
import Calculator from './../Tools/Calculator'; // mock data WILL NEED TO BE CODED
import DummyDocs from './../Tools/DummyDocs'; // mock data WILL NEED TO BE PASSED FROM CONTENTFUL
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faBook, faFileArchive, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleBurger = this.toggleBurger.bind(this);
  }
  loopLinks(type, data){
    let arr = [];
    for (let i = 1; i < data.length + 1; i++) {
      let href = "/"+type+"s/"+type + i;
      arr.push(
        <a className="navbar-item" href={href} key={type + "link" + i}>{type + i}</a>
      );
    }
    return arr;
  }
  toggleBurger(event) {
    document.getElementById('sibling-menu').classList.toggle("is-active");
    document.getElementById('burger').classList.toggle("is-active");
  }
  render() {
    fontawesome.library.add(solid, faTwitter, faFacebook, faBook, faRss, faToolbox, faFileArchive);
    return (
      <nav className="navbar is-fixed-top is-white" aria-label="dropdown navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <div className="navbar-item"><img src="https://bulma.io/images/bulma-logo.png" alt="Madmoney" width="112" height="28"/></div>
          </a>
          <a role="button" className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false" onClick={this.toggleBurger}>
            <span className="burger-slice" aria-hidden="true"></span>
            <span className="burger-slice" aria-hidden="true"></span>
            <span className="burger-slice" aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="sibling-menu">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/docs"><span className="icon"><i className="fas fa-book"></i></span> Docs</a>
            <div className="navbar-dropdown">
              {this.loopLinks('doc', DummyDocs)}
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span> Tools</a>
            <div className="navbar-dropdown">
              {this.loopLinks('tool', Calculator)}
            </div>
          </div>
          <a className="navbar-item" href="/blogs"><span className="icon"><i className="fas fa-rss"></i></span> Archive</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
