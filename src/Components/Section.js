import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import fontawesome from '@fortawesome/fontawesome';
import marked from 'marked';
import React, { Component } from 'react';
import Share from './Share';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Section extends Component {
  constructor(props) {
     super(props);
     this.handleImgs = this.handleImgs.bind(this);
  }
// TODO DONT APPLY THE DIV TO A NULL OR SINGLE, SEE IF THAT ALLOWS THE overflow
  handleImgs(imgs) {
    let _complete;
    let _temp = (imgs === null ? ["<div class='imgBox single'>"] : (imgs.length > 1 ? ["<div class='imgBox multiple'>"] : ["<div class='imgBox single'>"]));
    if(imgs !== null){
      imgs.forEach(img =>
        _temp.push(img)
    )}
    _temp.push("</div>");
    _complete = _temp.join('');
    return _complete;
  }
  //INTEPRET MARKDOWN & HTML FROM CONTENTFUL
  interpretHTML(a) {
    // CUT OUT IMGS TO ACCOUNT FOR MORE THAN 1 & TO BE STYLED ACCORDINGLY
    // TODO SEARCH NPM FOR A MORE ROBUST PARSER, AVOID ALL THIS SPAGHETTI CODE
    let _complete;
    let _temp = ["<div class='markedWrapper'>"];
    let _imgs = a.replace(/<\/p>/g, '').match(/<img.*>/g);
    let _text = a.replace(/<img.*>/g, '');
     _text = _text.replace(/<p>/g, '');
     _text = _text.replace(/<\/p>/g, '');

    // if there isnst </p> in text put one
    _temp.push(_text.concat(this.handleImgs(_imgs)));
    _temp.push("</div>")
    _complete =  _temp.join('');
    console.log("_complete", _complete);
    return {__html: _complete};
  }

  prettyDate(date){
    let _date = date.split(/[-T]/);
    return _date[2] + '/' + _date[1] + '/' + _date[0];
  }

  render() {
    fontawesome.library.add(solid, faSpinner);

    let filtered;
    let home;
    let loaded;
    let mission;
    let loading =
      <section className="section">
        <div className="container">
          <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
          <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
          <p><i className="fa fa-spinner fa-spin"></i></p>
        </div>
      </section>;

    if(this.props.loaded){
      // SHOW SINGLE MATCHING SECTION FOR "/URL/PATH/TO/SECTION"
      //  {imgs ? imgs : ''}

      filtered =
        this.props.data.filter(({fields}, index) =>
          fields.path === this.props.routing.match.url).map(({fields}, index) =>
            <section className="section" key={fields.title + index}>
              <div className="container">
                <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
                <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
                <p dangerouslySetInnerHTML={this.interpretHTML(marked(fields.description ? fields.description : fields.content))}/>
                {fields.download ? <a href={fields.download}>Download</a> : ''}
                <br/>
                <Share
                  media={fields.content}
                  source={fields.path}
                  title={fields.title}
                  url={fields.path}
                />
              </div>
            </section>);
      // SHOW THE 5 MOST RECENT ARTICLES FOR "/"
      home =
        this.props.data.slice(0, 5).map(({fields}, index) =>
          <section className="section" key={fields.title + index}>
            <div className="container">
              <a href={fields.path}><h1 className="title is -1">{fields.title}</h1></a>
              <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
              <p dangerouslySetInnerHTML={this.interpretHTML(marked(fields.content))}/>
              <br/>
              <Share
                media={fields.content}
                source={fields.path}
                title={fields.title}
                url={fields.path}
              />
              <div className="is-divider"></div>
            </div>
          </section>);
      // SHOW THE 1st || OLDEST ARTICLE AS STANDALONE MISSON STATEMENT
      mission =
        this.props.data.filter(({fields}, index) =>
          index === this.props.data.length - 1).map(({fields}, index) =>
            <section className="section" key={fields.title + index}>
              <div className="container">
                <h1 className="title is -1">{fields.title}</h1>
                <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
                <p dangerouslySetInnerHTML={this.interpretHTML(marked(fields.content))}/>
              </div>
            </section>);

      loaded = this.props.routing.match.url === '/' ? (this.props.isMission ? mission : home) : filtered;
    }

    return (
      <div>
        {this.props.loaded ? loaded : loading}
      </div>
    );
  }
}

export default Section;
