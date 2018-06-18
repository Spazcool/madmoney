import './../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './DonutChart';
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
        <div
          className="tile is-child box"
          key={outputNames[i][1]}>
          <div className="answer">
            <label
              className={
                (outputNames[i][1] === 'totalPurchase' ? 'is-primary' :
                (outputNames[i][1] === 'annualRent' ? 'is-danger' :
                (outputNames[i][1] === 'annualExpenses' ? 'is-info' :
                (outputNames[i][1] === 'cashFlow' ? 'is-warning' : ' is-success')))) + " label notification is-capitalized"}>
              {outputNames[i][1]}
            </label>
            <h1 className="subtitle is-1">
              {outputNames[i][1] !== 'Net Yield' ? String.fromCharCode(8364) : ''}
              {Number(this.props.output[outputNames[i][1]]).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
              {outputNames[i][1] === 'Net Yield' ? '%' : ''}
            </h1>
            <DonutChart
              style={{width: '10px'}}
              />
          </div>
        </div>
      )
    }

    return(
      <div className="tile">
        <div className="tile is-parent is-vertical">
          {outputs[4]}
          {outputs[1]}
          {outputs[0]}
        </div>
        <div className="tile is-parent is-vertical">
          {outputs[5]}
          {outputs[2]}
        </div>
      </div>
    )
  }
}
export default Outputs;
