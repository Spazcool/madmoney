import './../App.css';
import 'bulma/css/bulma.css';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
import React, { Component } from 'react';

class DonutChart extends Component {
  constructor(props){
    super(props)
    this.myInput = React.createRef()
  }

  componentDidMount () {
    console.log(this.refs.thing);
    console.log(this.refs.thing.el.childNodes);
  }


  // randomFunc(){
  //   const d3 = Plotly.d3;
  //   let WIDTH_IN_PERCENT_OF_PARENT = 60,
  //       HEIGHT_IN_PERCENT_OF_PARENT = 80;
  //   let gd3 = d3.select('body')
  //     .append('div')
  //     .style({
  //         width: WIDTH_IN_PERCENT_OF_PARENT + '%',
  //         'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
  //
  //         height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
  //         'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
  //     });
  //   let gd = gd3.node();
  //
  //   Plotly.plot(gd, [{
  //     type: 'bar',
  //     x: [1, 2, 3, 4],
  //     y: [5, 10, 2, 8],
  //     marker: {
  //       color: '#C8A2C8',
  //       line: {
  //         width: 2.5
  //       }
  //     }
  //   }], {
  //     title: 'Auto-Resize',
  //     font: {
  //       size: 16
  //     }
  //   });
  // }

  render(){
    // this.randomFunc();
    let height = '300';
    let width = '500';
    let data = [{
      values: [50000, 8000, 4000],
      labels: ['Base Price', 'Repairs Costs', 'Property Tax'],
      domain: {x: [0, 1]},
      name: 'Upfront Costs',
      hoverinfo: 'label+percent',
      hole: .6,
      type: 'pie'
    }];

    let layout = {
      annotations: [{
        font: {size: 20},
        margin: {
          t: 0,
          l: 0,
          r: 0,
          b: 0,
          pad: 0
        },
        showarrow: false,
        text: '62000',
        x: 0.17,
        y: 0.5
      }],
      height: height,
      width: width
    };
    return(
      <Plot
        ref={"thing"}
        data={data}
        layout={layout}
      />
    )
  }
}
export default DonutChart;
