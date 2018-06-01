import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Outputs extends Component {
  render(){
    return(
      <div className="field is-grouped">
        {Object.keys(this.props.data).map((output, index) =>
          <div className="control" key={output + index}>
            <div className="answer">
              <label className="label">{output}</label>
              {this.props.data[output]}
            </div>
          </div>)}
      </div>
    )
  }
}
export default Outputs;
