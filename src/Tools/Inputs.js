import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-slider/dist/bulma-slider.min.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import React, { Component } from 'react';

class Inputs extends Component {
  // Find output DOM associated to the DOM element passed as parameter
  findOutputForSlider( element ) {
   var idVal = element.id;
   let outputs = document.getElementsByTagName( 'output' );
   for( var i = 0; i < outputs.length; i++ ) {
     if ( outputs[ i ].htmlFor == idVal )
       return outputs[ i ];
   }
}
//
// function getSliderOutputPosition( slider ) {
//   // Update output position
//   var newPlace,
//       minValue;
//
//   var style = window.getComputedStyle( slider, null );
//   // Measure width of range input
//   sliderWidth = parseInt( style.getPropertyValue( 'width' ), 10 );
//
//   // Figure out placement percentage between left and right of input
//   if ( !slider.getAttribute( 'min' ) ) {
//     minValue = 0;
//   } else {
//     minValue = slider.getAttribute( 'min' );
//   }
//   var newPoint = ( slider.value - minValue ) / ( slider.getAttribute( 'max' ) - minValue );
//
//   // Prevent bubble from going beyond left or right (unsupported browsers)
//   if ( newPoint < 0 ) {
//     newPlace = 0;
//   } else if ( newPoint > 1 ) {
//     newPlace = sliderWidth;
//   } else {
//     newPlace = sliderWidth * newPoint;
//   }
//
//   return {
//     'position': newPlace + 'px'
//   }
// }

  handleSlide(e) {
    // console.log(e);
    // Get all document sliders
    const sliders = document.querySelectorAll( 'input[type="range"].slider' );
    console.log('SLIDERS', sliders);

    [].forEach.call( sliders, function ( slider ) {

      const output = this.findOutputForSlider( slider );
      console.log('OUTPUT', output);
})
      // if ( output ) {
      //   if ( slider.classList.contains( 'has-output-tooltip' ) ) {
      //     // Get new output position
      //     const newPosition = getSliderOutputPosition( slider );
      //
      //     // Set output position
      //     output.style[ 'left' ] = newPosition.position;
      //   }

    //     // Add event listener to update output when slider value change
    //     slider.addEventListener( 'input', function( event ) {
    //       if ( event.target.classList.contains( 'has-output-tooltip' ) ) {
    //         // Get new output position
    //         var newPosition = getSliderOutputPosition( event.target );
    //
    //         // Set output position
    //         output.style[ 'left' ] = newPosition.position;
    //       }
    //
    //       // Update output with slider value
    //       output.value = event.target.value;
    //     } );
    //   }
    // } );
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
        <label htmlFor="switchExample"> + {this.props.output.notaryFee}</label>
        </div>
      </div>;

    let lostMonthes =
      <div className="control" key="lostMonthesBox">
        <label className="label">Lost Monthes</label>
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
        <output htmlFor="lostMonthes">{this.props.revenus.lostMonthes}</output>
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
        <div className="tile is-child box field" key={inputTitles[i]}>
          <h2 className="label is-capitalized">{inputTitles[i]}</h2>
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
