import './../../../App.css';
import 'bulma/css/bulma.css';
import BarChart from './Charts/BarChart';
import React, { Component } from 'react';

class AnnualRent extends Component {
  render(){
    let lost = this.props.revenus.monthlyRent * this.props.revenus.lostMonthes;
    let rent = this.props.revenus.monthlyRent * 12;
    let anum = rent - lost;
    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-danger'>
            Annual Rent
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(anum).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <BarChart
            data={[
              lost,
              rent
            ]}
            labels={[
              'Potential Annual Rent Lost',
              'Potential Annual Rent'
            ]}
          />
        </div>
      </div>
    )
  }
}

export default AnnualRent;
