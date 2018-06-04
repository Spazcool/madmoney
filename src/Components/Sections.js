import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Select Target' };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    console.log('target', e.target.value);
    this.setState({ title: e.target.value }, () => {console.log('state', this.state);});
    // this.props.passTargetToParent(e.target);
  }

  render() {
    fontawesome.library.add(solid, faSpinner);

    let dropdown;
    let loading = [];
    let sections;

    for (let i = 0; i < 3; i++) {
      loading.push(
        <article className="Sections box" key={'sections-loading' + i}>
          <i className="fa fa-spinner fa-spin"></i>
        </article>
      );
    }

    if(this.props.loaded){
      // console.log(this.props.data[0].fields.date);
      // TODO HOW TO PARSE JUST THE YEAR FROM ISO8601
      sections =
        this.props.data.map(({fields}, index) =>
          <a href={fields.path} className="navbar-item" style={{textDecoration: 'none'}} key={fields.title}>
            <div>{fields.title}</div>
            <div>{fields.date}</div>
          </a>);
      // TODO TRY ONE MORE TIME WITH THE STANDARD BULMA DROPDOW BEFORE USING THIS HACK
      dropdown =
        <div className="navbar-menu" id="sibling-menu">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/docs"><span className="icon"><i className="fas fa-book"></i></span> Docs</a>
            <div className="navbar-dropdown">
              {sections}
            </div>
          </div>
        </div>;
    }

    return(
      <div className="tile is-parent">
        <div className="tile is-child notification">
          {this.props.loaded ? dropdown : loading}
        </div>
      </div>
    );
  }
}

export default Sections;
