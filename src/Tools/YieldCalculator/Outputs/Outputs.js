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
          <TotalPurchase Prix={this.props.Prix}/>
          <AnnualRent Recette={this.props.Recette}/>
          <AnnualExpenses expenses={this.props.expenses} Dépenses={this.props.Dépenses} Recette={this.props.Recette}/>
        </div>
        <div className="tile is-parent is-vertical">
          <NetYield expenses={this.props.expenses} Prix={this.props.Prix} Recette={this.props.Recette}/>
          <CashFlow expenses={this.props.expenses} Remboursement={this.props.Remboursement} Recette={this.props.Recette}/>
        </div>
      </div>
    )
  }
}

export default Outputs;
