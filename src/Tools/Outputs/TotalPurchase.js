import './../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './DonutChart';
import React, { Component } from 'react';

class TotalPurchase extends Component {
  render(){
    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-primary'>
            Initial Purchase Price
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(this.props.output.totalPurchase).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <DonutChart
            data={[
              this.props.prix.basePrice,
              this.props.prix.repairCosts,
              this.props.output.notaryFee
            ]}
            labels={[
              'Base Price',
              'Repair Costs',
              'Notary Fee'
            ]}
          />
        </div>
      </div>
    )
  }
}
export default TotalPurchase;
