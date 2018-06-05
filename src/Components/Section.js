import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import Calcul from './../Tools/Calcul';
import fontawesome from '@fortawesome/fontawesome';
import marked from 'marked';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Section extends Component {
  //INTEPRET MARKDOWN & HTML FROM CONTENTFUL
  interpretHTML(a) {
    return {__html: a};
  }
  render() {
    fontawesome.library.add(solid, faSpinner);
    let calcul;
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
      // console.log(this.props.path);
      // SHOW THE 5 MOST RECENT ARTICLES
      home =
        this.props.data.slice(0, 5).map(({fields}, index) =>
          <section className="section" key={fields.title + index}>
            <div className="container">
              <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
              <h6 className="subtitle">{fields.date}</h6>
              <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
              <div className="is-divider"></div>
            </div>
          </section>);
      // SHOW SINGLE MATCHING SECTION FOR URL PATH
      filtered =
        this.props.data.filter(({fields}, index) =>
          fields.path === this.props.path.url)
          .map(({fields}, index) =>
            <section className="section" key={fields.title + index}>
              <div className="container">
                <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
                <h6 className="subtitle">{fields.date}</h6>
                <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
                <div className="is-divider"></div>
              </div>
            </section>);
      // SHOW TOOL MODALS
      calcul = <Calcul/>;
      if(this.props.path === '/'){
        loaded = home;
      }else if(this.props.path === '/tools/calcul'){
        loaded = calcul;
      }else{
        loaded = filtered;
      }
    }
    return (
      <div>
        {this.props.loaded ? loaded : loading}
      </div>
    );
  }
}

export default Section;
