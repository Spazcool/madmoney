import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import React, { Component } from 'react';

class Inputs extends Component {
  render(){
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
    return(
      <p>hello</p>
    )
  }

}
export default Inputs;
