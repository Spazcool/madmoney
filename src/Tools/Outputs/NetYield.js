import './../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './DonutChart';
import React, { Component } from 'react';

class NetYield extends Component {
  render(){
    let net = (this.props.output.annualRent - this.props.output.annualExpenses) / this.props.output.totalPurchase * 100;
    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-success'>
            Net Yield
          </label>
          <h1 className="subtitle is-1">
            {Number(isNaN(net) ? 0 : net).toLocaleString("fr-FR", {maximumFractionDigits: 2})}%
          </h1>
          <DonutChart
            data={[
              net.toFixed(2),
              (100 - net).toFixed(2)
            ]}
            labels={[
              'Yield',
              'Total Cost'
            ]}
          />
        </div>
      </div>
    )
  }
}
export default NetYield;
