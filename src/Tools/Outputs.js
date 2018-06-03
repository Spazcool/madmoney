import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Outputs extends Component {
  render(){
    let outputs = [];
    let outputNames = [];

    for(let data in this.props){
      if(!this.props.hasOwnProperty(data)) continue;
      for(let datem in this.props[data]){
        outputNames.push([data, datem])
      }
    }

    for(let i = 0; i < outputNames.length; i++){
      outputs.push(
        <div className="tile is-child box" key={outputNames[i][1]}>
          <div className="answer">
            <label className="label">{outputNames[i][1]}</label>
            <h1 className="embiggen">{this.props.output[outputNames[i][1]]}</h1>
          </div>
        </div>
      )
    }
    
    return(
      <div className="tile">
        <div className="tile is-vertical is-parent">
          {outputs[4]}
          {outputs[1]}
          {outputs[0]}
        </div>
        <div className="tile is-vertical is-parent">
          {outputs[5]}
          {outputs[2]}
        </div>
      </div>
    )
  }
}
export default Outputs;
