import './../App.css';
import 'bulma/css/bulma.css';
import Inputs from './Inputs';
import Outputs from './Outputs';
import React, { Component } from 'react';

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      output:{
        annualExpenses:0,
        annualRent:0,
        cashFlow:0,
        notaryFee: 0,
        totalPurchase:0,
        yieldNet:0,
      },
      frais:{
        administrative:0,
        copropriete:0,
        divers:0,
        fonciere:0,
        habitation:0,
        loyers:0,
        monthlyExpenses:0,
        monthlyMortgage:0,
        reperation:0,
      },
      prix:{
        basePrice:0,
        repairCosts:0,
        oldProperty:false,
      },
      revenus:{
        lostMonthes:0,
        monthlyRent:0,
      },
    };
    this.calculateYield = this.calculateYield.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculateYield(){
    // TODO LOOP THROUGH VALUES TO APPLY PARSEINT AND TOFIXED
    let _frais = this.state.frais;
    let _prix = this.state.prix;
    let _revenus = this.state.revenus;
    let _output = Object.assign({}, this.state.output);
    _output.annualExpenses = (_frais.monthlyExpenses * 12).toFixed(0);
    _output.annualRent = ((_revenus.monthlyRent * 12) - (_revenus.monthlyRent * _revenus.lostMonthes)).toFixed(0);
    _output.cashFlow = ((_output.annualRent - _output.annualExpenses) / 12 - _frais.monthlyMortgage).toFixed(0);
    _output.notaryFee = ((_prix.oldProperty ? 0.08 : 0.045) * _prix.basePrice).toFixed(0);
    _output.totalPurchase = (parseInt(_prix.basePrice, 10) + parseInt(_prix.repairCosts, 10) + parseInt(_output.notaryFee, 10)).toFixed(0);
    let _yieldNet = ((_output.annualRent - _output.annualExpenses) / _output.totalPurchase * 100).toFixed(0);
    _output.yieldNet = isNaN(_yieldNet) ? 0 : _yieldNet;
    this.setState({
      output: _output
    })
  }

  handleChange(event) {
    for(let obj in this.state){
      if(event.target.name in this.state[obj]){
        let _tempName = Object.assign({}, this.state[obj]);
        if(event.target.name === "oldProperty"){
          _tempName[event.target.name] = this.state[obj].oldProperty ? false : true;
        }else{
          _tempName[event.target.name] = Number(event.target.value);
        }
        this.setState({[obj]: _tempName}, () => {this.calculateYield();});
      }
    }
  }

  render() {
    return(
      <div className="box notification">
        <div className="Calcul tile is-ancestor">
          <Inputs
            output={this.state.output}
            frais={this.state.frais}
            prix={this.state.prix}
            revenus={this.state.revenus}
            handleChange={this.handleChange}
          />
          <Outputs
            output={this.state.output}
          />
        </div>
      </div>
    )
  }
}
export default Calcul;
