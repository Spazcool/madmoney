import './../../../App.css';
import 'bulma/css/bulma.css';
import Pie from './Charts/PieChart';
import React, { Component } from 'react';

class NetYield extends Component {
  render(){
    let notaryFee = ((this.props.prix.oldProperty ? 0.08 : 0.045) * this.props.prix.basePrice);
    let totalPurchase = (parseInt(this.props.prix.basePrice, 10) + parseInt(this.props.prix.repairCosts, 10) + parseInt(notaryFee, 10));
    let net = ((((this.props.revenus.monthlyRent * 12) - (this.props.revenus.monthlyRent * this.props.revenus.lostMonthes))) - this.props.expenses.annual) / totalPurchase * 100;

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-success'>
            Net Yield
          </label>
          <h1 className="subtitle is-1">
            {Number(isNaN(net) ? 0 : net).toLocaleString("fr-FR", {maximumFractionDigits: 2})}%
          </h1>
          <Pie
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
