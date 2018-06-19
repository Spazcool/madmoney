import './../App.css';
import 'bulma/css/bulma.css';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
import React, { Component } from 'react';

class DonutChart extends Component {
  constructor(props){
    super(props)
    this.state = {
      thing: ''
    }
  }

  componentDidMount () {
    (function(){
      let d3 = Plotly.d3;
      let WIDTH_IN_PERCENT_OF_PARENT = 100,
          HEIGHT_IN_PERCENT_OF_PARENT = 50;
      let gd3 = d3.select('.plots')
        .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          // 'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

          height: HEIGHT_IN_PERCENT_OF_PARENT + 'em',
          'padding': -10 + 'em',
        });

      let gd = gd3.node();

      Plotly.plot(gd, [{
        type: 'pie',
        values: [50000, 8000, 4000],
        labels: ['Base Price', 'Repairs Costs', 'Property Tax'],
        name: 'Upfront Costs',
        hoverinfo: 'label+percent',
        hole: .6,
        showlegend: false,
        displayModeBar: false,
      }],

      {
        annotations: [{
          displayModeBar: false,

          font: {size: 20},
          showarrow: false,
          margin: {
            t: 0,
            l: 0,
            r: 0,
            b: 0,
            pad: 0
          },
          displayModeBar: false,

          text: '62000',
          x: 0.50,
          y: 0.5
        }],
      });
      window.onresize = function() {
        Plotly.Plots.resize(gd);
      };
    })();
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <div className="plots">
      </div>
    )
  }
}
export default DonutChart;
