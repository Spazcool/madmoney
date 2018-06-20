import AnnualExpenses from './Outputs/AnnualExpenses';
import AnnualRent from './Outputs/AnnualRent';
import './../App.css';
import 'bulma/css/bulma.css';
import CashFlow from './Outputs/CashFlow';
import NetYield from './Outputs/NetYield';
import React, { Component } from 'react';
import TotalPurchase from './Outputs/TotalPurchase';

class Outputs extends Component {
  render(){
    return(
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <TotalPurchase output={this.props.output} prix={this.props.prix}/>
          <AnnualRent revenus={this.props.revenus}/>
          <AnnualExpenses frais={this.props.frais}/>
        </div>
        <div className="tile is-parent is-vertical">
          <NetYield output={this.props.output}/>
          <CashFlow frais={this.props.frais} output={this.props.output}/>
        </div>
      </div>
    )
  }
}
export default Outputs;
