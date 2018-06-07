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

  render() {
    let listYears = [];
    this.props.data.forEach(item =>
      listYears.push(parseInt(item.fields.date, 10))
    )
    let years = listYears.filter((item, position) =>
      listYears.indexOf(item) === position
    )

    let dropdown =
      years.map((year, index) =>
        <div key={year + index}>
          <div className="control">
            <div className="select is-large is-fullwidth">
              <select onChange={this.handleSelect}>
                <option>{year}</option>
                {this.props.data.filter(({fields}, index) =>
                parseInt(fields.date, 10) === year).map(({fields}, index) =>
                <option value={fields.path} key={fields.title + index}>{fields.title}</option>)}
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
