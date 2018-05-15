import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Section extends Component {
  render() {
    if(this.props.type === "blog"){
      // console.log('Its a blog');
    }
    return (
      <div className="Sections">
        {this.props.data.map(({fields}, index) =>
          <a href={fields.path}><li key={index}>{fields.title} {fields.date}</li></a>
        )}
      </div>
    );
  }
}

export default Section;
