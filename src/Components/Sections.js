import './../App.css';
import 'bulma/css/bulma.css';
import Dropdown from './Dropdown';
import fontawesome from '@fortawesome/fontawesome';
import React, { Component } from 'react';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Sections extends Component {

  render() {
    fontawesome.library.add(solid, faSpinner);

    let loading =
      <article className="Sections box">
        <i className="fa fa-spinner fa-spin"></i>
      </article>;
    let type = 'e quelque chose';

    if(this.props.loaded && this.props.data.length > 0){
      if(this.props.data[0].sys.type === "Tool"){
        type = '\'un outil';
      }else if(this.props.data[0].sys.type === "Asset"){
        type = '\'un document';
      }else{
        type = '\'un article';
      }
    }

    return(
      <div className="notification is-danger is-radiusless sections">
        <h1 className="title is-5">{String.fromCharCode(192)} la recherche d{type}?</h1>
        {this.props.loaded ? <Dropdown data={this.props.data} /> : loading}
      </div>
    );
  }
}

export default Sections;
