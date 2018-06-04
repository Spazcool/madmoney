import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {
  render() {
    fontawesome.library.add(solid, faSpinner);

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
      console.log(this.props.data[0].fields.date);
      // TODO HOW TO PARSE JUST THE YEAR FROM ISO8601
      sections =
        this.props.data.map(({fields}, index) =>
          <a href={fields.path} className="box" style={{textDecoration: 'none'}} key={fields.title}>
            <div>{fields.title}</div>
            <div>{fields.date}</div>
          </a>
        );
    }

    return(
      <div className="tile is-parent">
        <div className="tile is-child notification">
          {this.props.loaded ? sections : loading}
        </div>
      </div>
    );
  }
}

export default Sections;
