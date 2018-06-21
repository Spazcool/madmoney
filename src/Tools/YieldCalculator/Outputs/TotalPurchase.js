import './../../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './Charts/DonutChart';
import React, { Component } from 'react';

class TotalPurchase extends Component {
  render(){
    let notaryFee = ((this.props.prix.oldProperty ? 0.08 : 0.045) * this.props.prix.basePrice);
    let totalPurchase = (parseInt(this.props.prix.basePrice, 10) + parseInt(this.props.prix.repairCosts, 10) + parseInt(notaryFee, 10));

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-primary'>
            Initial Purchase Price
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(totalPurchase).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <DonutChart
            data={[
              this.props.prix.basePrice,
              this.props.prix.repairCosts,
              notaryFee
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
