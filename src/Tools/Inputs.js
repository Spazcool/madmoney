import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-slider/dist/bulma-slider.min.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import React, { Component } from 'react';

class Inputs extends Component {
  render(){
    let switcher =
      <div className="control" key="switcher">
        <label className="label">Old Property</label>
        <div className="field">
          <input
            checked={this.props.prix.oldProperty}
            className="switch is-info"
            id="switchExample"
            name="oldProperty"
            onChange={this.props.handleChange}
            type="checkbox"
          />
        <label htmlFor="switchExample"> + {this.props.output.notaryFee}</label>
        </div>
      </div>;
      
    let lostMonthes =
      <div className="control" key="lostMonthesBox">
        <label className="label">Lost Monthes</label>
        <input
          className="slider is-fullwidth is-info is-small has-output"
          id="lostMonthes"
          min="0"
          max="12"
          name="lostMonthes"
          onChange={this.props.handleChange}
          step="1"
          type="range"
          value={this.props.revenus.lostMonthes}
        />
        <output for="lostMonthes">{this.props.revenus.lostMonthes}</output>
      </div>;

    let inputs = [];
    let inputNames = [];
    let inputTitles = [];

    for(let data in this.props){
      if(!this.props.hasOwnProperty(data) || data === "handleChange" || data === "output") continue;
      for(let datem in this.props[data]){
        inputNames.push([data, datem])
      }
      inputTitles.push(data);
    }

    for(let i = 0; i < inputTitles.length; i++){
      inputs.push(
        <div className="tile is-child box field" key={inputTitles[i]}>
          <h2 className="label">{inputTitles[i]}</h2>
          {inputNames.filter(input =>
            input[0] === inputTitles[i]).map(input =>
              input[1] === "oldProperty" ? switcher :
              (input[1] === "lostMonthes" ? lostMonthes :
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
            ))}
        </div>
      );
    }
    return(
      <div className="tile is-parent is-vertical is-4">
        {inputs[1]}
        {inputs[2]}
        {inputs[0]}
      </div>
    )
  }
}
export default Inputs;
