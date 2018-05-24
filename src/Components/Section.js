import './../App.css';
import 'bulma/css/bulma.css';
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
    let filtered;
    let home;
    let tools;
    let loaded;
    let loading =
      <article className="box">
        <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
        <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
        <p><i className="fa fa-spinner fa-spin"></i></p>
      </article>;
    if(this.props.loaded){
      console.log(this.props.path);
      // SHOW THE 5 MOST RECENT ARTICLES
      home =
        this.props.data.slice(0, 5).map(({fields}, index) =>
          <article className="box" key={fields.title + index}>
            <h1 className="title is -1">{fields.title}</h1>
            <h6 className="subtitle">{fields.date} <a href={fields.path}>{fields.path}</a></h6>
            <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
          </article>);
      // SHOW SINGLE MATCHING SECTION FOR URL PATH
      filtered =
        this.props.data.filter(({fields}, index) =>
          fields.path === this.props.path.url)
          .map(({fields}, index) =>
            <article className="box" key={fields.title + index}>
              <h1 className="title is -1">{fields.title}</h1>
              <h6 className="subtitle">{fields.date} <a href={fields.path}>{fields.path}</a></h6>
              <p dangerouslySetInnerHTML = {this.interpretHTML(marked(fields.content))}/>
            </article>);
      // SHOW TOOL MODALS
      tools = <Calcul/>;
      if(this.props.path === '/'){
        loaded = home;
      }else if(this.props.path === 'test'){
        loaded = tools;
      }else{
        loaded = filtered;
      }
    }

    return (
      <div className="tile is-vertical is-8">
        <div className="tile is-parent">
          <div className="tile is-child notification is-danger">
            {this.props.loaded ? loaded : loading}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
