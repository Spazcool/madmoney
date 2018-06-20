import './../../App.css';
import ArrowRight from './../../Imgs/ArrowRight.png';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class CashFlow extends Component {
  render(){
    let cashIn = this.props.output.annualRent / 12;
    let cashOut = this.props.output.annualExpenses / 12;
    let flow = (this.props.output.annualRent - this.props.output.annualExpenses) / 12;
    return(
      <div className="tile is-child box">
        <div className="answer">
          <label className='label notification is-warning'>
            Monthly Cash Flow
          </label>
          <h1 className="subtitle is-1">
            {String.fromCharCode(8364)}
            {Number(isNaN(flow) ? 0 : flow).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
          </h1>
          <div className='section'>
            <div className="arrowContainer bounceRight">
              <img src={ArrowRight} alt="ArrowRight" style={{width: '80%'}}/>
              <h1 className="subtitle is-2 centeredText">
                + {String.fromCharCode(8364)}
                {Number(isNaN(cashIn) ? 0 : cashIn).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
              </h1>
            </div>
            <div className="arrowContainer bounceLeft">
              <img src={ArrowRight} alt="ArrowLeft" style={{transform: 'rotate(180deg)', filter: 'invert(0.50)', width: '80%'}}/>
              <h1 className="subtitle is-2 centeredText">
                - {String.fromCharCode(8364)}
                {Number(isNaN(cashOut) ? 0 : cashOut).toLocaleString("fr-FR", {maximumFractionDigits: 2})}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashFlow;
