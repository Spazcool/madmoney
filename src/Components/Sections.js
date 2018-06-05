import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {
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
    fontawesome.library.add(solid, faSpinner);

    let dropdown;
    let loading = [];
    let type = 'something';
    for (let i = 0; i < 3; i++) {
      loading.push(
        <article className="Sections box" key={'sections-loading' + i}>
          <i className="fa fa-spinner fa-spin"></i>
        </article>
      );
    }

    if(this.props.loaded){
      if(this.props.data[0].sys.type === "tool"){
        type = 'a ' + this.props.data[0].sys.type;
      }else{
        type = 'an ' + this.props.data[0].sys.type;
      }

      let listYears = [];
      this.props.data.forEach(item =>
        listYears.push(parseInt(item.fields.date, 10))
      )
      let years = listYears.filter((item, position) =>
        listYears.indexOf(item) === position
      )

      dropdown =
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
    }

    return(
      <div className="notification is-danger is-radiusless">
        <h1 className="title is-5">Looking for {type}?</h1>
        {this.props.loaded ? dropdown : loading}
      </div>
    );
  }
}

export default Sections;
