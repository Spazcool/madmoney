import './../../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-slider/dist/bulma-slider.min.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import 'bulma-extensions/bulma-tooltip/dist/bulma-tooltip.min.css';
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
    let newPlace,
        minValue;
    let style = window.getComputedStyle(slider, null);
    let sliderWidth = parseInt( style.getPropertyValue('width'), 10);
    // Figure out placement percentage between left and right of input
    if (!slider.getAttribute('min')) {
      minValue = 0;
    } else {
      minValue = slider.getAttribute('min');
    }

    let newPoint = (slider.value - minValue) / (slider.getAttribute('max') - minValue);
    // Prevent bubble from going beyond left or right (unsupported browsers)
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
    let slider = document.querySelector('input[type="range"].slider');
    let output = this.findOutputForSlider(slider);

    if (output){
      if (slider.classList.contains('has-output-tooltip')){
        // Get new output position
        let newPosition = this.getSliderOutputPosition(slider);
        // Set output position
        output.style['left'] = newPosition.position;
      }
    }
  }

  render(){
    let switcher =
      <div className="control" key="switcher">
        <label className="label">Old Property</label>
        <div className="field">
          <input
            checked={this.props.prix.oldProperty}
            className="switch is-info"
            id="switchExample"
            name="oldProperty"
            onChange={this.props.handleChange}
            type="checkbox"
          />
        <label htmlFor="switchExample"> + <span className="tooltip" data-tooltip={this.props.prix.basePrice + ' x ' + (this.props.prix.oldProperty ? "0.08" : "0.045")}>{Number(this.props.output.notaryFee).toFixed(0)}</span></label>
        </div>
      </div>;

    let lostMonthes =
      <div className="control" key="lostMonthesBox">
        <label className="label">Lost Monthes</label>
        <br/>
        <input
          className="slider is-fullwidth is-info is-small has-output-tooltip"
          id="lostMonthes"
          min="0"
          max="12"
          name="lostMonthes"
          onChange={(e) => {this.props.handleChange(e); this.handleSlide(e)}}
          step="1"
          type="range"
          value={this.props.revenus.lostMonthes}
        />
      <output htmlFor="lostMonthes" style={{top:'30px'}}>{this.props.revenus.lostMonthes}</output>
      </div>;

    let inputs = [];
    let inputNames = [];
    let inputTitles = [];

    for(let data in this.props){
      if(!this.props.hasOwnProperty(data) || data === "handleChange" || data === "output") continue;
      for(let datem in this.props[data]){
        inputNames.push([data, datem])
      }
      inputTitles.push(data);
    }

    for(let i = 0; i < inputTitles.length; i++){
      inputs.push(
        <div
          className='tile is-child box'
          key={inputTitles[i]}>
          <h2 className={
            (inputTitles[i] === 'prix' ? 'is-primary' :
            (inputTitles[i] === 'revenus' ? 'is-danger' : 'is-info')) + " notification label is-capitalized"}>
            {inputTitles[i]}
          </h2>
          {inputNames.filter(input =>
          input[0] === inputTitles[i]).map(input =>
          input[1] === "oldProperty" ? switcher :
          (input[1] === "lostMonthes" ? lostMonthes :
            <div className="control" key={input[1]}>
              <label className="label is-capitalized">{input[1]}</label>
              <input
                className="input"
                name={input[1]}
                onChange={this.props.handleChange}
                type="number"
                value={this.props[input[1]]}
              />
            </div>
          ))}
        </div>
      );
    }
    return(
      <div className="tile is-parent is-vertical is-4">
        {inputs[1]}
        {inputs[2]}
        {inputs[0]}
      </div>
    )
  }
}
export default Inputs;
