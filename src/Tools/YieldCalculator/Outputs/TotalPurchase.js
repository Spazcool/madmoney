import './../../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './Charts/DonutChart';
import React, { Component } from 'react';

class TotalPurchase extends Component {
  render(){
    let notaryFee = ((this.props.Prix['Propriete Ancienne'] ? 0.08 : 0.045) * this.props.Prix['Prix d\'Achat']);
    let totalPurchase = (parseInt(this.props.Prix['Prix d\'Achat'], 10) + parseInt(this.props.Prix['Frais de Renovation'], 10) + parseInt(notaryFee, 10));

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-primary'>
            <span
              className="tooltip is-tooltip-bottom"
              data-tooltip={this.props.tooltip}>
                Prix Total d'Acquisition
            </span>
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(totalPurchase).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <DonutChart
            data={[
              this.props.Prix['Prix d\'Achat'],
              this.props.Prix['Frais de Renovation'],
              notaryFee
            ]}
            labels={[
              'Prix d\'Achat',
              'Frais de Renovation',
              'Frais de Notaire'
            ]}
          />
        </div>
      </div>
    )
  }
}

export default TotalPurchase;
