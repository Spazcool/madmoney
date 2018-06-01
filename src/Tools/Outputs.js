import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Outputs extends Component {
  render(){
    return(
      <div className="tile is-parent">
        <div className="field tile is-vertical is-parent is-grouped is-grouped-multiline">
          {Object.keys(this.props.data).filter(output =>
          output !== "yieldBrut").map((output, index) =>
            <div className="tile is-child control box" key={output + index}>
              <div className="answer">
                <label className="label">{output}</label>
                {this.props.data[output]}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Outputs;
