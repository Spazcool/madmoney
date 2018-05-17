import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Sections extends Component {
  render() {
    if(this.props.type === "blog"){
      // console.log('Its a blog');
    }
    return (
      <div className="tile is-parent">
        <div className="tile is-child notification is-success">
          {this.props.data.map(({fields}, index) =>
            <article className="Sections box" key={index}>
              <a href={fields.path} style={{textDecoration: 'none'}}>{fields.title} {fields.date}</a>
            </article>
          )}
        </div>
      </div>
    );
  }
}

export default Sections;
