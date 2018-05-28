import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      basePrice:0,
      lostMonthes:0,
      monthlyExpenses:0,
      monthlyMortgage:0,
      monthlyRent:0,
      oldProperty:false,
      repairCosts:0,
      data:{
        brut:0,
        net:0,
        cashFlow:0,
      },
    };
    this.calculateYield = this.calculateYield.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  calculateYield(oldProperty, basePrice, lostMonthes, monthlyExpenses, monthlyMortgage, monthlyRent, repairCosts){
    let _arguments = [];
    for (let argument of arguments) {
      if(typeof(argument) === "boolean"){
        _arguments.push(argument);
      }else{
        _arguments.push(parseInt(argument, 10));
      }
    }
    console.log(_arguments);
    // TODO TOGGGLE FOR USER ON WHETHER THE PROPERTY IS OLD OR NEW
    // CLEAN INPUTS to numbers,
    // if not numbers intput box should light up warning user.
    let notaryFee = oldProperty ? 0.08 : 0.045;
    let annualExpenses = monthlyExpenses * 12;
    let annualRent = monthlyRent * 12 - monthlyRent * lostMonthes;
    let totalPrice = parseInt(basePrice, 10) + basePrice * notaryFee + parseInt(repairCosts, 10);
    let brutYield = annualRent / totalPrice * 100;
    let netYield = (annualRent - annualExpenses) / totalPrice * 100;
    let monthlyCashFlow = (annualRent - annualExpenses) / 12 - monthlyMortgage;
    console.log('notaryFee',notaryFee);
    console.log('repairCosts', repairCosts);
    console.log('annualExpenses ', annualExpenses);
    console.log('annualRent ', annualRent);
    console.log('totalPrice ', totalPrice);
    console.log('brutYield ', brutYield);
    console.log('netYield ', netYield);
    console.log('monthlyCashFlow ', monthlyCashFlow);

    let _data = Object.assign({}, this.state.data);
    _data.brut = brutYield.toFixed(2);
    _data.net = netYield.toFixed(2);
    _data.cashFlow = monthlyCashFlow.toFixed(2);
    this.setState({
      data: _data
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    let inputs = Object.keys(this.state).filter(input =>
      input !== 'data' && input !== 'oldProperty').map((input, index) =>
      <div className="control" key={input + index}>
        <label className="label">{input}</label>
        <input
          className="input"
          name={input}
          onChange={this.handleChange}
          type="number"
          value={this.state[{input}]}
        />
      </div>);
    return(
      <div className="Calcul">
        {inputs}
        <div className="field is-grouped">
          <div className="control">
            <div className="answer">
              <label className="label">Brut</label>
              {this.state.data.brut}
            </div>
          </div>
          <div className="control">
            <div className="answer">
              <label className="label">Net</label>
              {this.state.data.net}
            </div>
          </div><div className="control">
            <div className="answer">
              <label className="label">Monthly Cash Flow</label>
              {this.state.data.cashFlow}
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={(e) => {
                e.preventDefault();
                this.calculateYield(
                  this.state.oldProperty,
                  this.state.basePrice,
                  this.state.lostMonthes,
                  this.state.monthlyExpenses,
                  this.state.monthlyMortgage,
                  this.state.monthlyRent,
                  this.state.repairCosts);
                }}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Calcul;
