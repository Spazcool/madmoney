import './../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e){
    if (typeof window !== 'undefined') {
      window.location.href = e.target.value;
    }
  }

  prettyDate(date){
    let _date = date.split(/[-T]/);
    return ' ' + _date[2] + '/' + _date[1];
  }

  render() {
    // PARSE YEAR FROM ALL DATA OBJ
    let listYears = [];
    this.props.data.forEach(item =>
      listYears.push(item.fields.date.split(/[-T]/)[0]))
    // FILTER OUT DUPLICATE YEARS
    let years = listYears.filter((item, position) =>
      listYears.indexOf(item) === position).sort((a, b) => b - a)

    let dropdown =
      years.map((year, index) =>
        <div key={year + index}>
          <div className="control">
            <div className="select is-large is-fullwidth">
              <select onChange={this.handleSelect}>
                <option>{year}</option>
                {this.props.data.filter(({fields}, index) =>
                parseInt(fields.date, 10) === parseInt(year, 10)).map(({fields}, index) =>
                <option value={fields.path} key={fields.title + index}>{this.prettyDate(fields.date)} - {fields.title}</option>)}
              </select>
            </div>
          </div>
        <br/>
      </div>);

    return(
      <div>
        {dropdown}
      </div>
    )
  }
}

export default Dropdown;
