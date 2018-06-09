import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import fontawesome from '@fortawesome/fontawesome';
import marked from 'marked';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Section extends Component {
  //INTEPRET MARKDOWN & HTML FROM CONTENTFUL
  interpretHTML(a) {
    return {__html: a};
  }

  prettyDate(date){
    let _date = date.split(/[-T]/);
    return ' ' + _date[0] + '/' + _date[1] + '/' + _date[2];
  }

  sortMonthDay(a, b){
    a = Date.parse(a);
    b = Date.parse(b);

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }

  render() {
    fontawesome.library.add(solid, faSpinner);

    let filtered;
    let home;
    let loaded;
    let loading =
      <section className="section">
        <div className="container">
          <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
          <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
          <p><i className="fa fa-spinner fa-spin"></i></p>
        </div>
      </section>;

    if(this.props.loaded){
      // SHOW THE 5 MOST RECENT ARTICLES FOR "/"
      home =
        this.props.data.sort((a, b) =>
        this.sortMonthDay(a.fields.date, b.fields.date)).slice(0, 5).map(({fields}, index) =>
          <section className="section" key={fields.title + index}>
            <div className="container">
              <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
              <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
              <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
              <div className="is-divider"></div>
            </div>
          </section>);
      // SHOW SINGLE MATCHING SECTION FOR "/URL PATH"
      filtered =
        this.props.data.filter(({fields}, index) =>
          fields.path === this.props.routing.match.url)
          .map(({fields}, index) =>
            <section className="section" key={fields.title + index}>
              <div className="container">
                <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
                <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
                <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
              </div>
            </section>);

      loaded = this.props.routing.match.url === '/' ? home : filtered;
    }

    return (
      <div>
        {this.props.loaded ? loaded : loading}
      </div>
    );
  }
}

export default Section;
