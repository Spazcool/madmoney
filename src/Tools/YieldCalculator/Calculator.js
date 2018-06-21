import './../../App.css';
import 'bulma/css/bulma.css';
import Info from './Info';
import Inputs from './Inputs';
import Outputs from './Outputs/Outputs';
import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      output:{
        annualExpenses:0,
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
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculateExpenses(){
    let _frais = this.state.frais;
    let _output = Object.assign({}, this.state.output);
    _output.annualExpenses = (
      (_frais.monthlyExpenses * 12) +
      (_frais.monthlyMortgage * 12) +
      _frais.administrative +
      _frais.copropriete +
      _frais.divers +
      _frais.fonciere +
      _frais.habitation +
      _frais.loyers +
      _frais.reperation);

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
        this.setState({[obj]: _tempName}, () => {this.calculateExpenses();});
      }
    }
  }

  render() {
    return(
      <div className="box notification">
        <div className="calculator tile is-ancestor">
          <Inputs
            frais={this.state.frais}
            output={this.state.output}
            prix={this.state.prix}
            revenus={this.state.revenus}
            handleChange={this.handleChange}
          />
          <Outputs
            frais={this.state.frais}
            output={this.state.output}
            prix={this.state.prix}
            revenus={this.state.revenus}
          />
        </div>
        <Info />
      </div>
    )
  }
}

export default Calculator;
