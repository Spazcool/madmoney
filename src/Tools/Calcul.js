import './../App.css';
import 'bulma/css/bulma.css';
import Inputs from './Inputs';
import Outputs from './Outputs';
import React, { Component } from 'react';

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      data:{
        annualExpenses:0,
        annualRent:0,
        cashFlow:0,
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
    // TODO WHATS THE DIFFERENCE / VALUE OF USING OBJECT.ASSIGN FOR _DATA \ let _data = this.state.data;
    // LAG IN TYPED INPUT DUE TO RENDERING DATA FROM STATE.prix
    // BUT CALCULATING WITH DATA FROM STATE.DATA
    // console.log('calc basePrice ', this.state.prix.basePrice);
    let _frais = this.state.frais;
    let _prix = this.state.prix;
    let _revenus = this.state.revenus;
    let _data = Object.assign({}, this.state.data);
    let notaryFee = (_prix.oldProperty ? 0.08 : 0.045) * _prix.basePrice;

    _data.annualExpenses = (_frais.monthlyExpenses * 12).toFixed(0);
    _data.annualRent = ((_revenus.monthlyRent * 12) - (_revenus.monthlyRent * _revenus.lostMonthes)).toFixed(0);
    _data.cashFlow = ((_data.annualRent - _data.annualExpenses) / 12 - _frais.monthlyMortgage).toFixed(0);
    _data.totalPurchase = (parseInt(_prix.basePrice, 10) + parseInt(_prix.repairCosts, 10) + notaryFee).toFixed(0);
    _data.yieldNet = ((_data.annualRent - _data.annualExpenses) / _data.totalPurchase * 100).toFixed(0);
    this.setState({
      data: _data
    })
  }
  handleChange(event) {
    for(let obj in this.state){
      if(event.target.name in this.state[obj]){
        let _tempName = Object.assign({}, this.state[obj]);
        if(event.target.name === "oldProperty"){
          let _tempValue = this.state.prix.oldProperty ? false : true;
          _tempName[event.target.name] = _tempValue;
        }else{
          _tempName[event.target.name] = event.target.value;
        }
        this.setState({
          [obj]: _tempName
        }, () => {
          this.calculateYield();
        });
      }
    }
  }
  render() {
    return(
      <div className="Calcul tile is-ancestor">
        <Inputs
          frais={this.state.frais}
          prix={this.state.prix}
          revenus={this.state.revenus}
          handleChange={this.handleChange}
        />
        <Outputs
          data={this.state.data}
        />
      </div>
    )
  }
}
export default Calcul;
