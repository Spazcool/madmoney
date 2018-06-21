import AnnualExpenses from './AnnualExpenses';
import AnnualRent from './AnnualRent';
import './../../../App.css';
import 'bulma/css/bulma.css';
import CashFlow from './CashFlow';
import NetYield from './NetYield';
import React, { Component } from 'react';
import TotalPurchase from './TotalPurchase';

class Outputs extends Component {
  render(){
    return(
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <TotalPurchase prix={this.props.prix}/>
          <AnnualRent revenus={this.props.revenus}/>
          <AnnualExpenses expenses={this.props.expenses} frais={this.props.frais}/>
        </div>
        <div className="tile is-parent is-vertical">
          <NetYield expenses={this.props.expenses} prix={this.props.prix} revenus={this.props.revenus}/>
          <CashFlow expenses={this.props.expenses} frais={this.props.frais} mortgage={this.props.mortgage} revenus={this.props.revenus}/>
        </div>
      </div>
    )
  }
}

export default Outputs;
