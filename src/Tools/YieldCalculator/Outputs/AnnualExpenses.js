import './../../../App.css';
import 'bulma/css/bulma.css';
import DonutChart from './Charts/DonutChart';
import React, { Component } from 'react';

class AnnualExpenses extends Component {
  render(){
    let sum = this.props.expenses.annual;

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-info'>
            Dépenses Annuelles Totales
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(sum).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <DonutChart
            data={[
              this.props.Dépenses['Assurance Habitation'],
              this.props.Dépenses.Copropriete,
              this.props.Dépenses.Divers,
              this.props.Dépenses.Entretien,
              ((this.props.Dépenses.Gestion / 100) * (((this.props.Recette['Loyer Mensuel'] * 12) - (this.props.Recette['Loyer Mensuel'] * this.props.Recette.Vacance)))),
              this.props.Dépenses['Taxe Fonciere']
            ]}
            labels={[
              'Assurance Habitation',
              'Copropriete',
              'Divers',
              'Entretien',
              'Gestion',
              'Taxe Fonciere'
            ]}
          />
        </div>
      </div>
    )
  }
}

export default AnnualExpenses;
