import './../App.css';
import 'bulma/css/bulma.css';
import Dropdown from './Dropdown';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {

  render() {
    fontawesome.library.add(solid, faSpinner);

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
    }

    return(
      <div className="notification is-danger is-radiusless">
        <h1 className="title is-5">Looking for {type}?</h1>
        {this.props.loaded ? <Dropdown data={this.props.data} /> : loading}
      </div>
    );
  }
}

export default Sections;
