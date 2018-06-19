import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Info extends Component {
  render(){
    return(
      <div className="tile is-vertical box is-12">
        <p>If you like the calculator above, but want to have more control over the variables you can <a href="https://onedrive.live.com/View.aspx?resid=B423EC6E99BEAFE3!114759&app=Excel&authkey=!AM_qQwZ9Yz9Dr5I" target="blank">play</a> with or <a href="/docs/2018/05/14/Yield_Calculator">download</a> the spreadsheet version.</p>
      </div>
    )
  }
}
export default Info;