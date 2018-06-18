import './../App.css';
import 'bulma/css/bulma.css';
import Plot from 'react-plotly.js';
import React, { Component } from 'react';

class DonutChart extends Component {
  render(){
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
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: '62000',
          x: 0.17,
          y: 0.5
        }
      ],
      height: 300,
      width: 400

    };
    return(
        <Plot
          data={data}
          layout={layout}
        />
    )
  }
}
export default DonutChart;
