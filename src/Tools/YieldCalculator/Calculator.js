import './../../App.css';
import 'bulma/css/bulma.css';
import Info from './Info';
import Inputs from './Inputs';
import Instructions from './Instructions';
import Outputs from './Outputs/Outputs';
import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      expenses:{
        annual:0,
      },
      Dépenses:{
        'Assurance Habitation':0,
        Copropriete:0,
        Divers:0,
        Entretien:0,
        'Taxe Fonciere':0,
        Gestion:0,
      },
      Remboursement:{
        Mensualite:0,
      },
      Prix:{
        'Prix d\'Achat':0,
        'Frais de Renovation':0,
        'Propriete Ancienne':false,
      },
      Recette:{
        'Loyer Mensuel':0,
        Vacance:0,
      },
    };
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculateExpenses(){
    let _Dépenses = this.state.Dépenses;
    let _Recette = this.state.Recette;
    let _expenses = Object.assign({}, this.state.expenses);
    _expenses.annual = (
      _Dépenses['Assurance Habitation'] +
      _Dépenses.Copropriete +
      _Dépenses.Divers +
      _Dépenses.Entretien +
      ((_Dépenses.Gestion / 100) * (((_Recette['Loyer Mensuel'] * 12) - (_Recette['Loyer Mensuel'] * _Recette.Vacance)))) +
      _Dépenses['Taxe Fonciere']);

    this.setState({
      expenses: _expenses
    })
  }

  handleChange(event) {
    for(let obj in this.state){
      if(event.target.name in this.state[obj]){
        let _tempName = Object.assign({}, this.state[obj]);
        if(event.target.name === "Propriete Ancienne"){
          _tempName[event.target.name] = this.state[obj]['Propriete Ancienne'] ? false : true;
        }else{
          _tempName[event.target.name] = Number(event.target.value);
        }
        this.setState({[obj]: _tempName}, () => {this.calculateExpenses();});
      }
    }
  }

  render() {
    return(
      <div className="calculator box notification">
        <Instructions />
        <div className="tile is-ancestor">
          <Inputs
            expenses={this.state.expenses}
            Dépenses={this.state.Dépenses}
            Remboursement={this.state.Remboursement}
            Prix={this.state.Prix}
            Recette={this.state.Recette}
            handleChange={this.handleChange}
          />
          <Outputs
            expenses={this.state.expenses}
            Dépenses={this.state.Dépenses}
            Remboursement={this.state.Remboursement}
            Prix={this.state.Prix}
            Recette={this.state.Recette}
          />
        </div>
        <Info />
      </div>
    )
  }
}

export default Calculator;
