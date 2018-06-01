import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import React, { Component } from 'react';

class Inputs extends Component {
  render(){
    let switcher =
      <div className="control" key="switcher">
        <label className="label">Old Property</label>
        <div className="field">
          <input
            id="switchExample"
            onChange={this.props.handleChange}
            type="checkbox"
            name="oldProperty"
            className="switch"
            checked={this.props.prix.oldProperty ? false : true}
          />
        <label htmlFor="switchExample"></label>
        </div>
      </div>;
    let inputs = [];
    let inputNames = [];
    let inputTitles = [];
    for(let data in this.props){
      if(!this.props.hasOwnProperty(data) || data === "handleChange") continue;
      for(let datem in this.props[data]){
        inputNames.push([data, datem])
      }
      inputTitles.push(data);
    }
    for(let i = 0; i < inputTitles.length; i++){
      inputs.push(
        <div className="field" key={inputTitles[i]}>
          <h2>{inputTitles[i]}</h2>
          {inputNames.filter(input =>
            input[0] === inputTitles[i]).map(input =>
              input[1] === "oldProperty" ? switcher :
              <div className="control" key={input[1]}>
                <label className="label">{input[1]}</label>
                <input
                  className="input"
                  name={input[1]}
                  onChange={this.props.handleChange}
                  type="number"
                  value={this.props[input[1]]}
                />
              </div>
            )}
        </div>
      );
    }
    return(
      <div className="tile is-vertical is-9">
        <div className="tile is-parent">
          <div className="tile is-child notification">
            {inputs}
          </div>
        </div>
      </div>
    )
  }
}
export default Inputs;
