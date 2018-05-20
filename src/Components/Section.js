import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';
// "https://app.contentful.com/spaces/dktgpvzygyep/assets/62PKQbMstq44miIiuKccCU"
// https://docs.google.com/spreadsheets/d/e/2PACX-1vQlUBV85JO2dtxF3qPpoLXRWzj8MC7NRJyA2H9Cvewc8MzbGDWz0S3PDgoIVs9zkhVB5UOl6dJ-dnbG/pubhtml?widget=true&amp;headers=false
// <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlUBV85JO2dtxF3qPpoLXRWzj8MC7NRJyA2H9Cvewc8MzbGDWz0S3PDgoIVs9zkhVB5UOl6dJ-dnbG/pubhtml?widget=true&amp;headers=false"></iframe>
class Section extends Component {
  render() {
    fontawesome.library.add(solid, faSpinner);
    let filtered;
    let home;
    let loading =
      <article className="box">
        <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
        <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
        <p><i className="fa fa-spinner fa-spin"></i></p>
      </article>;

    if(this.props.loaded){
      console.log(this.props.data[0].fields.content);
      // console.log('ASSETS: ', this.props.assets);
      // SHOW THE 5 MOST RECENT ARTICLES
      home =
        this.props.data.slice(0, 5).map(({fields}, index) =>
          <article className="box" key={fields.title + index}>
            <h1 className="title is -1">{fields.title}</h1>
            <h6 className="subtitle">{fields.date} <a href={fields.path}>{fields.path}</a></h6>
            <p>{fields.content}</p>
          </article>);
      // SHOW MATCHING SECTION FOR URL PATH
      filtered =
        this.props.data.filter(({fields}, index) =>
          fields.path === this.props.path.url)
          .map(({fields}, index) =>
            <article className="box" key={fields.title + index}>
              <h1 className="title is -1">{fields.title}</h1>
              <h6 className="subtitle">{fields.date} <a href={fields.path}>{fields.path}</a></h6>
              <p>{fields.content}</p>
            </article>);
    }
    return (
      <div className="tile is-vertical is-8">
        <div className="tile is-parent">
          <div className="tile is-child notification is-danger">
            {this.props.loaded ? (this.props.path === '/' ? home : filtered) : loading}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
