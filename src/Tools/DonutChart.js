import './../App.css';
import 'bulma/css/bulma.css';
import { Doughnut } from 'react-chartjs-2';
import React, { Component } from 'react';

class DonutChart extends Component {
  render() {
    const data = {
      labels: this.props.labels,
      datasets: [
        {
        data: this.props.data,
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }
    ]
    };
    return (
      <Doughnut data={data} />
    )
  }
}
export default DonutChart;
