import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Section extends Component {
  render() {
    let loading = [];
    for (let i = 0; i < 5; i++) {
      loading.push(
        <article className="box" key={'section-loading' + i}>
          <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
          <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
          <p><i className="fa fa-spinner fa-spin"></i></p>
        </article>
      );
    }
    if(this.props.loaded === true){
      return (
        <div className="tile is-vertical is-8">
          <div className="tile is-parent">
            <div className="tile is-child notification is-danger">
              {this.props.data.slice(0, this.props.limit).map(({fields}, index) =>
                <article className="box" key={fields.title + index}>
                  <h1 className="title is -1">{fields.title}</h1>
                  <h6 className="subtitle">{fields.date} <a href={fields.path}>{fields.path}</a></h6>
                  <p>{fields.content}</p>
                </article>
              )}
            </div>
          </div>
        </div>
      );
    }
    fontawesome.library.add(solid, faSpinner);
    return (
      <div className="tile is-vertical is-8">
        <div className="tile is-parent">
          <div className="tile is-child notification is-danger">
            {loading}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
