import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    if(this.props.type === "blog"){
      // console.log('Its a blog');
    }
    return (
      <div className="tile is-vertical is-8">
        <div className="tile is-parent">
          <div className="tile is-child notification is-danger">
            {this.props.data.map(({fields}, index) =>
              <article className="box" key={index}>
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
}

export default Section;
