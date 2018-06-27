import AnnualExpenses from './AnnualExpenses';
import AnnualRent from './AnnualRent';
import './../../../App.css';
import 'bulma/css/bulma.css';
import CashFlow from './CashFlow';
import NetYield from './NetYield';
import React, { Component } from 'react';
import TotalPurchase from './TotalPurchase';
import tooltip from './OutputTooltipInfo';

class Outputs extends Component {
  render(){
    return(
      <div className="tile is-8 outputs">
        <div className="tile is-parent is-vertical is-6">
          <TotalPurchase Prix={this.props.Prix} tooltip={tooltip.TotalPurchase}/>
          <AnnualRent Recette={this.props.Recette} tooltip={tooltip.AnnualRent}/>
          <AnnualExpenses expenses={this.props.expenses} Dépenses={this.props.Dépenses} Recette={this.props.Recette} tooltip={tooltip.AnnualExpenses}/>
        </div>
        <div className="tile is-parent is-vertical is-6">
          <NetYield expenses={this.props.expenses} Prix={this.props.Prix} Recette={this.props.Recette} tooltip={tooltip.NetYield}/>
          <CashFlow expenses={this.props.expenses} Remboursement={this.props.Remboursement} Recette={this.props.Recette} tooltip={tooltip.CashFlow}/>
        </div>
      </div>
    )
  }
}

export default Outputs;
