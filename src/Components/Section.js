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
    // REPLACE ACCENTED CHARS & REMOVE SPECIAL CHARS & NUMBERS
    let _text = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, " ").split(/\b/);
    let wordCounts = { };
    let wordCountsDescend = [];
    let words = sw.removeStopwords(_text, sw.fr);

    for(let i = 0; i < words.length; i++){
      // DONT ALLOW WHITESPACE OR SINGLE LETTERS OR SHORT WORDS
      if(words[i].match(/^[a-z]+$/g,'') && words[i].length >= 4){
         wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
      }
    }

    wordCountsDescend = Object.keys(wordCounts).sort((a,b) => wordCounts[b]-wordCounts[a]);
    // console.log('_text: ', _text);
    // console.log('words: ', words);
    console.log('wordCountsDescend: ', wordCountsDescend);
    console.log('wordCounts: ', wordCounts);
    return wordCountsDescend;
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

    // this.findKeywords(_text);

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
                
                {this.findKeywords(fields.content).map((word, index) =>
                  <p key={index}>{word}</p>
                )}
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
