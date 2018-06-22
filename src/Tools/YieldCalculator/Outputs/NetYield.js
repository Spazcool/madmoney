import './../../../App.css';
import 'bulma/css/bulma.css';
import Pie from './Charts/PieChart';
import React, { Component } from 'react';

class NetYield extends Component {
  render(){
    let notaryFee = ((this.props.Prix['Propriete Ancienne'] ? 0.08 : 0.045) * this.props.Prix['Prix d\'Achat']);
    let totalPurchase = (parseInt(this.props.Prix['Prix d\'Achat'], 10) + parseInt(this.props.Prix['Frais de Renovation'], 10) + parseInt(notaryFee, 10));
    let net = ((((this.props.Recette['Loyer Mensuel'] * 12) - (this.props.Recette['Loyer Mensuel'] * this.props.Recette.Vacance))) - this.props.expenses.annual) / totalPurchase * 100;

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-success'>
            Rendement Net
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
              'Rendement',
              'Prix Total d\'Acquisition'
            ]}
          />
        </div>
      </div>
    )
  }
}

export default NetYield;
