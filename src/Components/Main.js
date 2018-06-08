import './../App.css';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome';
import Mission from './Mission';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Section from './Section';
import Sections from './Sections';
import solid, {faSpinner} from '@fortawesome/fontawesome-free-solid';

class Main extends Component {

  render() {
    fontawesome.library.add(solid, faSpinner);

    let loading = [];
    for (let i = 0; i < 3; i++) {
      loading.push(
        <article className="Sections box" key={'sections-loading' + i}>
          <i className="fa fa-spinner fa-spin"></i>
        </article>
      );
    }

    return(
      <Switch>
        <Route exact path='/blogs' render={(props) =>
          <Sections data={this.props.posts} loaded={this.props.loaded} />
        }/>
        <Route exact path='/docs' render={(props) =>
          <Sections data={this.props.docs} loaded={this.props.loaded} />
        }/>
        <Route exact path='/tools' render={(props) =>
          <Sections data={this.props.tools} loaded={this.props.loaded} />
        }/>
        <Route path='/blogs/:number' render={(props) =>
          <div>
            <Section
              data={this.props.posts}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.posts} loaded={this.props.loaded} />
          </div>
        }/>
        <Route path='/docs/:number' render={(props) =>
          <div>
            <Section
              data={this.props.docs}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.docs} loaded={this.props.loaded} />
          </div>
        }/>
        <Route path='/tools/:number' render={(props) =>
          <div>
            <Section
              data={this.props.tools}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.tools} loaded={this.props.loaded} />
          </div>
        }/>
        <Route exact path='/' render={(props) =>
          <div>
            <Section
              data={this.props.posts}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.posts} loaded={this.props.loaded} />
            <Mission />
          </div>
        }/>
      </Switch>
    );
  }
}

export default Main;
