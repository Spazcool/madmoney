import './../../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-slider/dist/bulma-slider.min.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import 'bulma-extensions/bulma-tooltip/dist/bulma-tooltip.min.css';
import tooltip from './InputTooltipInfo';
import React, { Component } from 'react';

class Inputs extends Component {
  constructor() {
    super();
    this.findOutputForSlider = this.findOutputForSlider.bind(this);
    this.getSliderOutputPosition = this.getSliderOutputPosition.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
  }

  findOutputForSlider(element) {
    let idVal = element.id;
    let outputs = document.getElementsByTagName('output');

    for(let i = 0; i < outputs.length; i++){
      if (outputs[i].htmlFor.value === idVal){
        return outputs[i];
      }
    }
  }

  getSliderOutputPosition(slider) {
    let newPlace, minValue;
    let style = window.getComputedStyle(slider, null);
    let sliderWidth = parseInt( style.getPropertyValue('width'), 10);

    if (!slider.getAttribute('min')) {
      minValue = 0;
    } else {
      minValue = slider.getAttribute('min');
    }

    let newPoint = (slider.value - minValue) / (slider.getAttribute('max') - minValue);

    if (newPoint < 0) {
      newPlace = 0;
    } else if (newPoint >= 1) {
      newPlace = sliderWidth - 50;
    } else {
      newPlace = sliderWidth * newPoint;
    }

    return {
      'position': newPlace + 'px'
    }
  }

  handleSlide(e) {
    let sliders = document.querySelectorAll('input[type="range"].slider');
    sliders.forEach(slider => {
      let output = this.findOutputForSlider(slider);
      if (output) {
        if (slider.classList.contains('has-output-tooltip')) {
          let newPosition = this.getSliderOutputPosition(slider);
          output.style['left'] = newPosition.position;
        }
      }
    })
  }

  render(){
    let Gestion =
      <div className="control" key="Gestion">
        <label className="label">
          <span
            className="tooltip is-tooltip-right"
            data-tooltip={tooltip.Dépenses.Gestion}>
              Gestion
          </span>
        </label>
        <br/>
        <input
          className="slider is-fullwidth has-output-tooltip is-info"
          id="Gestion"
          min="0"
          max="10"
          name="Gestion"
          onChange={(e) => {this.props.handleChange(e); this.handleSlide(e)}}
          step="1"
          type="range"
          value={this.props.Dépenses.Gestion}
        />
      <output htmlFor="Gestion" style={{top:'30px', textOverflow: 'clip'}}>{this.props.Dépenses.Gestion}%</output>
      </div>;

    let Vacance =
      <div className="control" key="Vacance">
        <label className="label">
          <span
            className="tooltip is-tooltip-right"
            data-tooltip={tooltip.Recette.Vacance}>
              Vacance
          </span>
        </label>
        <br/>
        <input
          className="slider is-fullwidth has-output-tooltip is-danger"
          id="Vacance"
          min="0"
          max="12"
          name="Vacance"
          onChange={(e) => {this.props.handleChange(e); this.handleSlide(e)}}
          step="1"
          type="range"
          value={this.props.Recette.Vacance}
        />
      <output htmlFor="Vacance" style={{top:'30px'}}>{this.props.Recette.Vacance}</output>
      </div>;

    let notaryFee = ((this.props.Prix['Propriete Ancienne'] ? 0.08 : 0.045) * this.props.Prix['Prix d\'Achat']);
    let Ancienne =
      <div className="control" key="Ancienne">
        <label className="label">
          <span
            className="tooltip is-tooltip-right"
            data-tooltip={tooltip.Prix['Propriete Ancienne']}>
              Propriete Ancienne
          </span>
        </label>
        <div className="field">
          <input
            checked={this.props.Prix['Propriete Ancienne']}
            className="switch is-primary"
            id="Ancienne"
            name="Propriete Ancienne"
            onChange={this.props.handleChange}
            type="checkbox"
          />
          <label htmlFor="Ancienne">
          + <span
            className="tooltip is-tooltip-right"
            data-tooltip={String.fromCharCode(8364) + this.props.Prix['Prix d\'Achat'] + ' x ' + (this.props.Prix['Propriete Ancienne'] ? "0.08" : "0.045")}>
              {String.fromCharCode(8364)}
              {Number(notaryFee).toFixed(0)}
            </span>
          </label>
        </div>
      </div>;

    let inputs = [];
    let inputNames = [];
    let inputTitles = [];

    for(let data in this.props){
      if(!this.props.hasOwnProperty(data) || data === "handleChange" || data === "expenses") continue;
      for(let datem in this.props[data]){
        inputNames.push([data, datem]);
      }
      inputTitles.push(data);
    }

    for(let i = 0; i < inputTitles.length; i++){
      inputs.push(
        <div
          className='tile is-child box'
          key={inputTitles[i]}>
          <h2 className={
            (inputTitles[i] === 'Prix' ? 'is-primary' :
            (inputTitles[i] === 'Recette' ? 'is-danger' :
            (inputTitles[i] === 'Dépenses' ? 'is-info' : 'is-warning'))) + " notification label"}>
              {(inputTitles[i] === 'Remboursement' ? 'Remboursement de Pret' :
              (inputTitles[i] === 'Prix' ? 'Prix Total d\'Acquisition' :
              (inputTitles[i] === 'Recette' ? 'Recette Locative' : inputTitles[i])))}
          </h2>
          {inputNames.filter(input =>
          input[0] === inputTitles[i]).map(input =>
          input[1] === "Propriete Ancienne" ? Ancienne :
          (input[1] === "Vacance" ? Vacance :
          (input[1] === "Gestion" ? Gestion :
            <div className="control" key={input[1]}>
              <label className="label">
                <span
                  className="tooltip is-tooltip-right"
                  data-tooltip={tooltip[inputTitles[i]][input[1]]}>
                    {input[1]}
                  </span>
                </label>
              <input
                className="input"
                name={input[1]}
                onChange={this.props.handleChange}
                type="number"
                value={this.props[input[1]]}
              />
            </div>
          )))}
        </div>
      );
    }
    return(
      <div className="tile is-parent is-vertical is-4 inputs">
        {inputs[2]}
        {inputs[3]}
        {inputs[0]}
        {inputs[1]}
      </div>
    )
  }
}

export default Inputs;
