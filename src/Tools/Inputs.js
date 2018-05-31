import './../App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions/bulma-switch/dist/bulma-switch.min.css';
import React, { Component } from 'react';

class Inputs extends Component {
  render(){
    let switcher =
      <div className="control" key="switcher">
        <label className="label">Old Property</label>
        <div className="field">
          <input
            id="switchExample"
            onChange={this.props.handleChange}
            type="checkbox"
            name="oldProperty"
            className="switch"
            checked={this.props.prix.oldProperty ? false : true}
          />
        <label htmlFor="switchExample"></label>
        </div>
      </div>;
    // let inputTitles = ["prix", "revenus", "frais"];
    // let inputs = [];
    // for (let i = 0; i < inputTitles.length; i++) {
      // inputs.push(
      //   <div className="field" key={inputTitles[i] + i}>
      //     <h2>{inputTitles[i]}</h2>
      //     {this.props[inputTitles[i]].map((input, index) =>
      //       input === "oldProperty" ? switcher :
      //       <div className="control" key={input}>
      //         <label className="label">{input}</label>
      //         <input
      //           className="input"
      //           name={input}
      //           onChange={this.props.handleChange}
      //           type="number"
      //           value={this.props[inputTitles[i]][input]}
      //         />
      //       </div>
      //     )}
      //   </div>
      // );
    // }

  // TODO MODIDY THE ABOVE ARRAY CENTRIC DATA MANIPULATION TO FOLLOW THE BELOW OBJECT CENTRIC STYLE
    for (let item in this.props.prix) {
      // skip loop if the property is from prototype
      if (!this.props.prix.hasOwnProperty(item)) continue;
      console.log(item);
      // var obj = validation_messages[key];
      // for (var prop in obj) {
      //     // skip loop if the property is from prototype
      //     if(!obj.hasOwnProperty(prop)) continue;
      //
      //     // your code
      //     alert(prop + " = " + obj[prop]);
      // }
    }

    return(
      <div>
      {switcher}
      </div>
    )
  }
}
export default Inputs;
