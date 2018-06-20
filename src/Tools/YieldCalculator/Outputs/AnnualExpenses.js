import './../../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './DonutChart';
import React, { Component } from 'react';

class AnnualExpenses extends Component {
  render(){
    let sum = this.props.output.annualExpenses;
    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-info'>
            Annual Expenses
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(sum).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <DonutChart
            data={[
              (this.props.frais.monthlyExpenses * 12),
              (this.props.frais.monthlyMortgage * 12),
              this.props.frais.administrative,
              this.props.frais.copropriete,
              this.props.frais.divers,
              this.props.frais.fonciere,
              this.props.frais.habitation,
              this.props.frais.loyers,
              this.props.frais.reperation
            ]}
            labels={[
              'Monthly Expenses',
              'Monthly Mortgage',
              'Administrative',
              'Copropriete',
              'Divers',
              'Fonciere',
              'Habitation',
              'Loyers',
              'Reperation'
            ]}
          />
        </div>
      </div>
    )
  }
}
export default AnnualExpenses;
