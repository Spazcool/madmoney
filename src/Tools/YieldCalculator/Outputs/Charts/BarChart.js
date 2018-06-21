import './../../../../App.css';
import 'bulma/css/bulma.css';
import { Bar } from 'react-chartjs-2';
import React, { Component } from 'react';

class BarChart extends Component {
  render() {
    const data = {
      labels: this.props.labels,
      datasets: [{
        data: this.props.data,
        label: null,
        backgroundColor: [
          '#FF6384',
          '#36A2EB'
        ],
        hoverBackgroundColor: [
          '#CC6384',
          '#03A2EB'
        ],
        borderColor: '#CC3062',
        borderWidth: 1,
        hoverBorderColor: '#AA0040',
      }]
    }

    return (
      <div>
        <Bar
          data={data}
          legend={{display: false}}
          options={{maintainAspectRatio: false}}
          width={100}
        />
      </div>
    )
  }
}

export default BarChart;
