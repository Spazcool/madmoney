import './../../../../App.css';
import 'bulma/css/bulma.css';
import { Doughnut } from 'react-chartjs-2';
import React, { Component } from 'react';

class DonutChart extends Component {
  render() {
    const data = {
      labels: this.props.labels,
      datasets: [{
        data: this.props.data,
        backgroundColor: [
          '#FF6384',
          '#FFCE56',
          '#03C03C',
          '#36A2EB',
          '#B28DEF',
          '#FF6961',
          '#FFB347',
          '#77DD77',
          '#99A8D1'
        ],
        hoverBackgroundColor: [
          '#CC6384',
          '#CCCE56',
          '#00C03C',
          '#03A2EB',
          '#908DEF',
          '#CC6961',
          '#CCB347',
          '#55DD77',
          '#77A8D1'
        ]
      }]
    };
    return (
      <Doughnut className='chart' data={data}/>
    )
  }
}

export default DonutChart;
