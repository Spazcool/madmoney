import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-divider/dist/bulma-divider.min.css';
import fontawesome from '@fortawesome/fontawesome';
import marked from 'marked';
import React, { Component } from 'react';
import Share from './Share';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Section extends Component {

  handleImgs(imgs) {
    let _multiple;
    let _temp = ["<div class='columns is-multiline'>"];
    if(imgs.length === 1){
      return "<span class='single'>"+imgs[0]+"</span>";
    }else{
      imgs.forEach(img => _temp.push("<div class='column is-6'>"+img+"</div>"))
    }
    _temp.push("</div>");
    _multiple = _temp.join('');
    return _multiple;
  }
  //INTEPRET MARKDOWN & HTML FROM CONTENTFUL
  interpretHTML(a) {
    // CUT OUT IMGS TO ACCOUNT FOR MORE THAN 1 & TO BE STYLED ACCORDINGLY
    let _complete;
    let _temp = ["<div class='markedWrapper'>"];
    let _imgs = a.replace(/<\/p>/g, '').match(/<img.*>/g);
    let _text = a.replace(/<img.*>|<p>|<\/p>/g, '');
     if(_imgs === null){
       _temp.push(_text);
     }else if(_imgs.length > 1){
       _temp.push(_text.concat(this.handleImgs(_imgs)));
     }else{
       _temp.push(this.handleImgs(_imgs).concat(_text));
     }
    _temp.push("</div>")
    _complete =  _temp.join('');
    return {__html: _complete};
  }

  prettyDate(date){
    let _date = date.split(/[-T]/);
    return _date[2] + '/' + _date[1] + '/' + _date[0];
  }

  render() {
    fontawesome.library.add(solid, faSpinner);

    let content;
    let loading =
      <section className="section">
        <div className="container">
          <h1 className="title is -1"><i className="fa fa-spinner fa-spin"></i></h1>
          <h6 className="subtitle"><i className="fa fa-spinner fa-spin"></i></h6>
          <p><i className="fa fa-spinner fa-spin"></i></p>
        </div>
      </section>;

    if(this.props.loaded){
      if(this.props.routing.match.url === '/'){
        if(this.props.isMission){
          // SHOW THE 1st || OLDEST ARTICLE AS STANDALONE MISSON STATEMENT
          content =
            this.props.data.filter(({fields}, index) =>
              index === this.props.data.length - 1).map(({fields}, index) =>
                <section className="section" key={fields.title + index}>
                  <div className="container">
                    <h1 className="title is-1">{fields.title}</h1>
                    <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
                    <p dangerouslySetInnerHTML={this.interpretHTML(marked(fields.content))}/>
                  </div>
                </section>);
        }else{
          // SHOW THE 5 MOST RECENT ARTICLES FOR "/"
          content =
            this.props.data.slice(0, 5).map(({fields}, index) =>
              <section className="section" key={fields.title + index}>
                <div className="container">
                  <a href={fields.path}><h1 className="title is-1">{fields.title}</h1></a>
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
        }
      }else{
        // SHOW SINGLE MATCHING SECTION FOR "/URL/PATH/TO/SECTION"
        content =
          this.props.data.filter(({fields}, index) =>
            fields.path === this.props.routing.match.url).map(({fields}, index) =>
              <section className="section" key={fields.title + index}>
                <div className="container">
                  <a href={fields.path}><h1 className="title is-1">{fields.title}</h1></a>
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
      }
    }

    return (
      <div>
        {this.props.loaded ? content : loading}
      </div>
    );
  }
}

export default Section;
