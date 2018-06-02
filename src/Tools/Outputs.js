import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Outputs extends Component {
  render(){
    // console.log(this.props.data);
    return(
      <div className="tile">
        <div className="tile is-vertical is-parent">
          {Object.keys(this.props.data).filter(output =>
          output !== "cashFlow" &&
          output !== "yieldNet").map((output, index) =>
            <div className="tile is-child control box" key={output + index}>
              <div className="answer">
                <label className="label">{output}</label>
                <h1 className="embiggen">{this.props.data[output]}</h1>
              </div>
            </div>
          )}
        </div>
        <div className="tile is-vertical is-parent">
          {Object.keys(this.props.data).filter(output =>
          output !== "annualExpenses" &&
          output !== "annualRent" &&
          output !== "totalPurchase").map((output, index) =>
            <div className="tile is-child control box" key={output + index}>
              <div className="answer">
                <label className="label">{output}</label>
                <h1 className="embiggen">{this.props.data[output]}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Outputs;
