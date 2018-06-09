import './../App.css';
import 'bulma/css/bulma.css';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import fontawesome from '@fortawesome/fontawesome';
import madLogo from './../Imgs/images.png';
import React, { Component } from 'react';
import solid, {faBook, faFileArchive, faRss, faToolbox} from '@fortawesome/fontawesome-free-solid';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  loopLinks(data){
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      let href = data[i].fields.path;
      arr.push(
        <a className="navbar-item" href={href} key={href + "link" + i}>{data[i].fields.title}</a>
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

    let docs;
    let loading = <span><i className="fa fa-spinner fa-spin"></i></span>;
    let tools;

    if(this.props.loaded){
      docs = this.loopLinks(this.props.docs);
      tools = this.loopLinks(this.props.tools);
    }

    return (
      <nav className="navbar is-fixed-top is-white" aria-label="dropdown navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <div className="navbar-item"><img src={madLogo} alt="Madmoney" width="50" height="30"/></div>
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
              {this.props.loaded ? docs : loading}
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/tools"><span className="icon"><i className="fas fa-toolbox"></i></span> Tools</a>
            <div className="navbar-dropdown">
              {this.props.loaded ? tools : loading}
            </div>
          </div>
          <a className="navbar-item" href="/blogs"><span className="icon"><i className="fas fa-rss"></i></span> Archive</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
