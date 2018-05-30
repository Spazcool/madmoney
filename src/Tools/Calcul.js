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
    // TODO sexier TOGGGLE
    // TODO ANOTHER TOGGLE FOR BRUT & NET || JUST MAKE BRUT INTPUTS REQUIRED 
    // TODO CLEAN INPUTS to numbers, dont trust user
    // TODO if not numbers intput box should light up warning user.
    let notaryFee = oldProperty ? 0.08 : 0.045;
    let annualExpenses = monthlyExpenses * 12;
    let annualRent = monthlyRent * 12 - monthlyRent * lostMonthes;
    let totalPrice = parseInt(basePrice, 10) + basePrice * notaryFee + parseInt(repairCosts, 10);
    let brutYield = annualRent / totalPrice * 100;
    let netYield = (annualRent - annualExpenses) / totalPrice * 100;
    let monthlyCashFlow = (annualRent - annualExpenses) / 12 - monthlyMortgage;
    let _data = Object.assign({}, this.state.data);
    _data.brut = brutYield.toFixed(2);
    _data.net = netYield.toFixed(2);
    _data.cashFlow = monthlyCashFlow.toFixed(2);
    this.setState({
      data: _data
    });
  }
  handleChange(event) {
    if(event.target.name === "oldProperty"){
      let _toggle = this.state.oldProperty === true ? false : true;
      this.setState({
        oldProperty: _toggle,
      });
    }else{
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }
  render() {
    // console.log('here', this.state);
    const rows = ["rowOne", "rowTwo", "rowThree"];
    let inputs =
      rows.map((row, rowIndex) =>
        <div className={row + " field is-grouped is-grouped-multiline"} key={row + rowIndex}>
          {Object.keys(this.state).filter((input) =>
            input !== 'data' &&
            input !== 'oldProperty').filter((input, filterIndex)=>
            filterIndex % 3 === rowIndex).map((input, index) =>
            <div className="control" key={input + index}>
              <label className="label">{input}</label>
              <input
                className="input"
                name={input}
                onChange={this.handleChange}
                type="number"
                value={this.state[input]}
              />
            </div>
          )}
        </div>
      );
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
    let radios = [];
    for (let i = 0; i < 2; i++) {
      radios.push(
        <label className="radio" key={"oldProperty"+i}>
          <input
            checked={this.state.oldProperty === (i === 0 ? true : false)}
            name="oldProperty"
            onChange={this.handleChange}
            type="radio"
            value={i === 0 ? true : false}
          />
          {i === 0 ? "Yes" : "No"}
        </label>
      );
    }
    return(
      <div className="Calcul">
        {inputs}
        <div className="control">
          <label className="label">Old Property?</label>
          {radios}
        </div>
        {outputs}
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
