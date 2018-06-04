import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {
  handleSelect(e){
    console.log(e.target.value);
    // document.getElementById("foo").onchange = function() {
    //   if (this.selectedIndex!==0) {
    //     window.location.href = this.value;
    //   }
    // };

  }

  render() {
    fontawesome.library.add(solid, faSpinner);

    let dropdown;
    let loading = [];
    let sections;

    for (let i = 0; i < 3; i++) {
      loading.push(
        <article className="Sections box" key={'sections-loading' + i}>
          <i className="fa fa-spinner fa-spin"></i>
        </article>
      );
    }

    if(this.props.loaded){
      // console.log(this.props.data[0].fields.date);
      // TODO HOW TO PARSE JUST THE YEAR FROM ISO8601
      sections =
        this.props.data.map(({fields}, index) =>
          <a href={fields.path} className="navbar-item" style={{textDecoration: 'none'}} key={fields.title}>
            <div>{fields.title}</div>
            <div>{fields.date}</div>
          </a>);

      let hackdropdown =
        <div className="navbar-item has-dropdown is-hoverable is-fullwidth">
          <h1 className="navbar-link subtitle is-fullwidth">Dropdown</h1>
          <div className="navbar-dropdown is-fullwidth">
            {sections}
          </div>
        </div>;

      dropdown =
      <div class="field">
        <div class="control">
          <div class="select is-primary">
            <select id="foo" onChange={this.handleSelect}>
              <option value={"/tools/calcul"}>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>


    }

    return(
      <div className="tile is-parent">
        <div className="tile is-child notification">
          {this.props.loaded ? dropdown : loading}
        </div>
      </div>
    );
  }
}

export default Sections;
