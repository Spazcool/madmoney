import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
// import Keyword from './Keyword';
import marked from 'marked';
import React, { Component } from 'react';
import Share from './Share';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';
import sw from 'stopword';

class Section extends Component {

  findKeywords(text){
    // BUG <p> tags are in the text

    // console.log(text);

    let wordCounts = { };
    let wordCountsSorted = [];
    // BUG accented words are being dropped
    let wordList = text.split(/\b/);

    console.log(wordList);
    let words = sw.removeStopwords(wordList, sw.fr)

    for(let i = 0; i < words.length; i++){
      words[i] = words[i].toLowerCase();
      if(words[i].match(/^[a-z]+$/g,'')){
         wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
      }
    }
    wordCountsSorted = Object.keys(wordCounts).sort((a,b) => wordCounts[b]-wordCounts[a]);
    // console.log(wordCountsSorted);
    // console.log(wordCounts);
    return wordCounts;
  }

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
    // CUT OUT IMGS TO ACCOUNT FOR MORE THAN 1 & STYLE ACCORDINGLY
    let _complete;
    let _imgs = a.match(/<img.*>/g, '');
    let _text = a.replace(/<img.*>/g, '');
    let _temp = ["<div class='markedWrapper'>"];

    this.findKeywords(_text);

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
                  <hr/>
                </div>
              </section>);
        }
      }else{
        // SHOW SINGLE MATCHING SECTION FOR "/URL/PATH/TO/SECTION"
        content =
          this.props.data.filter(({fields}, index) =>
            fields.path === this.props.routing.match.url).map(({fields}, index) =>

            <div className="tile is-ancestor" key={index}>

              <div className="tile is-10 is-parent">
                <div className="tile is-child">
                  <section className="section" key={fields.title + index}>
                    <a href={fields.path}><h1 className="title is-1">{fields.title}</h1></a>
                    <h6 className="subtitle">{this.prettyDate(fields.date)}</h6>
                    <p dangerouslySetInnerHTML={this.interpretHTML(marked(fields.description ? fields.description : fields.content))}/>
                    {fields.download ? <a class="button is-info" href={fields.download}>Download</a> : ''}
                    <br/>
                    <Share
                      media={fields.content}
                      source={fields.path}
                      title={fields.title}
                      url={fields.path}
                    />
                  </section>
                </div>
              </div>

              <div className="tile is-parent">
                <div className="tile is-child box">
                <p>suftt</p>
                </div>
              </div>

            </div>);
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
