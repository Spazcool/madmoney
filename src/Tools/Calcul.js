import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Calcul extends Component {
  constructor() {
    super();
    this.state = {
      variable_A: '',
      variable_B: '',
      result: 0,
    };
    this.addition = this.addition.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addition(A,B) {
    let _result = parseInt(A, 10) + parseInt(B, 10);
    this.setState({
      result: _result,
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return(
      <div className="Calcul">
        <div className="field is-grouped">
          <div className="control">
            <label className="label">Variable A</label>
            <input
              className="input"
              name="variable_A"
              onChange={this.handleChange}
              placeholder="A"
              type="number"
              value={this.state.variable_A}
            />
          </div>
          <div className="control">
            <label className="label">Variable B</label>
            <input
              className="input"
              name="variable_B"
              onChange={this.handleChange}
              placeholder="B"
              type="number"
              value={this.state.variable_B}
            />
          </div>
          <div className="control">
            <div className="answer">
              <label className="label">Result</label>
              {this.state.result}
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link" onClick={(e) => {e.preventDefault(); this.addition(this.state.variable_A, this.state.variable_B);}}>Submit</button>
          </div>
        </div>

        <div className="field">
          <label className="label">Extra Stuff</label>
        </div>

        <div className="field">
          <label className="label">Variable List</label>
          <div className="control">
            <div className="select">
              <select>
                <option>List Item A</option>
                <option>List Item B</option>
                <option>List Item C</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox"/>
              I agree to the <a href="">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input className="radio" name="question"/>
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question"/>
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Calcul;
