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
      sections =
        this.props.data.map(({fields}, index) =>
          <article className="Sections box" key={fields.title}>
            <a href={fields.path} style={{textDecoration: 'none'}}>{fields.title} {fields.date}</a>
          </article>
        );
    }
    return(
      <div className="tile is-parent">
        <div className="tile is-child notification is-success">
          {this.props.loaded ? sections : loading}
        </div>
      </div>
    );
  }
}

export default Sections;
