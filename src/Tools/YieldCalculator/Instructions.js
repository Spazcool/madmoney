import './../../App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Instructions extends Component {
  render(){
    return(
      <div className="tile is-vertical box is-12">
        <p>Entrez les informations pertinentes ci-dessous pour calculer le rendement net, les flux de trésorerie et pour voir les représentations graphiques des frais et des coûts.</p>
      </div>
    )
  }
}
export default Instructions;
