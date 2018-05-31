import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import Inputs from './Inputs';
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
        yieldBrut:0,
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
        oldProperty:false,
        repairCosts:0,
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
    let _frais = this.state.frais;
    let _prix = this.state.prix;
    let _revenus = this.state.revenus;
    let notaryFee = (_prix.oldProperty ? 0.08 : 0.045) * _prix.basePrice;
    let annualExpenses = _frais.monthlyExpenses * 12;
    let annualRent = _revenus.monthlyRent * 12 - _revenus.monthlyRent * _revenus.lostMonthes;
    let totalPrice = parseInt(_prix.basePrice, 10) + _prix.basePrice * notaryFee + parseInt(_prix.repairCosts, 10);
    let brutYield = annualRent / totalPrice * 100;
    let netYield = (annualRent - annualExpenses) / totalPrice * 100;
    let monthlyCashFlow = (annualRent - annualExpenses) / 12 - _frais.monthlyMortgage;
    let totalPurchase = parseInt(_prix.basePrice, 10) + parseInt(_prix.repairCosts, 10) + notaryFee;
    let _data = Object.assign({}, this.state.data);

    _data.annualExpenses = annualExpenses.toFixed(2);
    // BUG annualrent getting /10 when lostMonthes = 1
    _data.annualRent = annualRent.toFixed(2);
    _data.cashFlow = monthlyCashFlow.toFixed(2);
    _data.totalPurchase = totalPurchase.toFixed(2);
    _data.yieldBrut = brutYield.toFixed(2);
    _data.yieldNet = netYield.toFixed(2);
    this.setState({
      data: _data
    });
  }
  handleChange(event) {
    if(event.target.name in this.state.frais){
      let _frais = Object.assign({}, this.state.frais);
      _frais[event.target.name] = event.target.value;
      this.setState({
        frais: _frais,
      });
    }else if(event.target.name in this.state.prix){
      let _prix = Object.assign({}, this.state.prix);
      if(event.target.name === "oldProperty"){
        _prix[event.target.name] = this.state.prix.oldProperty === true ? false : true;
      }else{
        _prix[event.target.name] = event.target.value;
      }
      this.setState({
        prix: _prix,
      });
    }else if(event.target.name in this.state.revenus){
      let _revenus = Object.assign({}, this.state.revenus);
      _revenus[event.target.name] = event.target.value;
      this.setState({
        revenus: _revenus,
      });
    }
    this.calculateYield()
  }
  render() {
    let switcher =
      <div className="control">
        <label className="label">Old Property</label>
        <div className="field">
          <input
            id="switchExample"
            onChange={this.handleChange}
            type="checkbox"
            name="oldProperty"
            className="switch"
            checked={this.state.prix.oldProperty === true ? false : true}
          />
        <label htmlFor="switchExample"></label>
        </div>
      </div>;
    let frais =
      <div className="field">
        <h2>Frais</h2>
        {Object.keys(this.state.frais).map((input, index) =>
          <div className="control" key={input}>
            <label className="label">{input}</label>
            <input
              className="input"
              name={input}
              onChange={this.handleChange}
              type="number"
              value={this.state.frais[input]}
            />
          </div>
        )}
      </div>;
    let prix =
      <div className="field">
        <h2>Prix</h2>
        {Object.keys(this.state.prix).filter((input) =>
          input !== 'oldProperty').map((input, index) =>
          <div className="control" key={input}>
            <label className="label">{input}</label>
            <input
              className="input"
              name={input}
              onChange={this.handleChange}
              type="number"
              value={this.state.prix[input]}
            />
          </div>
        )}
        {switcher}
      </div>;
    let revenus =
      <div className="field">
        <h2>Revenus</h2>
        {Object.keys(this.state.revenus).map((input, index) =>
          <div className="control" key={input}>
            <label className="label">{input}</label>
            <input
              className="input"
              name={input}
              onChange={this.handleChange}
              type="number"
              value={this.state.revenus[input]}
            />
          </div>
        )}
      </div>;
    let outputs =
      <div className="field is-grouped">
        {Object.keys(this.state.data).map((output, index) =>
          <div className="control" key={output + index}>
            <div className="answer">
              <label className="label">{output}</label>
              {this.state.data[output]}
            </div>
          </div>)}
      </div>;
    return(
      <div className="Calcul">
        <Inputs/>
        {prix}
        {revenus}
        {frais}
        {outputs}
      </div>
    )
  }
}
export default Calcul;
