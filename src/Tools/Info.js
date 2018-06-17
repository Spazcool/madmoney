import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Info extends Component {
  render(){
    return(
      <div className="tile is-vertical box is-12">
        <p>If you like the calculator above, but want to have more control over the variables you can <a href="">play</a> with or <a href="">download</a> the spreadsheet version.</p>
      </div>
    )
  }
}
export default Info;
