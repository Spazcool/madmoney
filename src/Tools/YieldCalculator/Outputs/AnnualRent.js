import './../../../App.css';
import 'bulma/css/bulma.css';
import PieChart from './Charts/PieChart';
import React, { Component } from 'react';

class AnnualRent extends Component {
  render(){
    let lost = this.props.Recette['Loyer Mensuel'] * this.props.Recette.Vacance;
    let rent = this.props.Recette['Loyer Mensuel'] * 12;
    let anum = rent - lost;

    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-danger'>
            Recette Locative Annuelle
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(anum).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <PieChart
            data={[
              lost,
              anum
            ]}
            labels={[
              'Vacance',
              'Loyer Annuelle'
            ]}
          />
        </div>
      </div>
    )
  }
}

export default AnnualRent;
