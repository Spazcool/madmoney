import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      basePrice:'',
      lostMonthes:'',
      monthlyExpenses:'',
      monthlyMortgage:'',
      monthlyRent:'',
      repairCosts:'',
      brut:0,
      net:0,
      cashFlow:0,
      data:[],
    };
    this.calculateYield = this.calculateYield.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  calculateYield(basePrice, lostMonthes, monthlyExpenses, monthlyMortgage, monthlyRent, repairCosts){
    // CLEAN INPUTS to numbers,
    // if not numbers intput box should light up warning user.
    let annualExpenses = (monthlyExpenses + monthlyMortgage) * 12;
    let annualRent = (monthlyRent * 12) - (monthlyRent * lostMonthes);
    const notaryFee = 0.09;
    let totalPrice =  basePrice + (basePrice * notaryFee) + repairCosts;
    let brutYield = (annualRent / totalPrice) * 100;
    let netYield = ((annualRent - annualExpenses) / totalPrice) * 100;
    let monthlyCashFlow = (annualRent - annualExpenses) / 12;
    this.setState({
      brut: brutYield,
      net: netYield,
      cashFlow: monthlyCashFlow,
      data:[brutYield,netYield,monthlyCashFlow],
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    console.log('brut', this.state.brut);
    console.log('net', this.state.net);
    console.log('cash', this.state.cashFlow);
    console.log('data', this.state.data);

    return(
      <div className="Calcul">
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Price w/out Fees</label>
            <input
              className="input"
              name="basePrice"
              onChange={this.handleChange}
              type="number"
              value={this.state.basePrice}
            />
          </div>
          <div className="control">
            <label className="label">Initial Repair Costs</label>
            <input
              className="input"
              name="repairCosts"
              onChange={this.handleChange}
              type="number"
              value={this.state.repairCosts}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Monthly Expenses</label>
            <input
              className="input"
              name="monthlyExpenses"
              onChange={this.handleChange}
              type="number"
              value={this.state.monthlyExpenses}
            />
          </div>
          <div className="control">
            <label className="label">Monthly Mortgage</label>
            <input
              className="input"
              name="monthlyMortgage"
              onChange={this.handleChange}
              type="number"
              value={this.state.monthlyMortgage}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Monthly Rent</label>
            <input
              className="input"
              name="monthlyRent"
              onChange={this.handleChange}
              type="number"
              value={this.state.monthlyRent}
            />
          </div>
          <div className="control">
            <label className="label">Vacant Monthes</label>
            <input
              className="input"
              name="lostMonthes"
              onChange={this.handleChange}
              type="number"
              value={this.state.lostMonthes}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <div className="answer">
              <label className="label">Brut</label>
              {this.state.brut}
            </div>
          </div>
          <div className="control">
            <div className="answer">
              <label className="label">Net</label>
              {this.state.net}
            </div>
          </div><div className="control">
            <div className="answer">
              <label className="label">Monthly Cash Flow</label>
              {this.state.cashFlow}
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={(e) => {e.preventDefault(); this.calculateYield(this.state.basePrice, this.state.lostMonthes, this.state.monthlyExpenses, this.state.monthlyMortgage, this.state.monthlyRent, this.state.repairCosts);}}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Calcul;
