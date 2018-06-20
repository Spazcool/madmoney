import Calcul from './../Tools/YieldCalculator/Calculator';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Section from './Section';
import Sections from './Sections';

class Main extends Component {
  render() {
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

        <Route path='/blogs/:year/:month/:day/:title' render={(props) =>
          <div>
            <Section
              data={this.props.posts}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.posts} loaded={this.props.loaded} />
          </div>
        }/>

        <Route path='/docs/:year/:month/:day/:title' render={(props) =>
          <div>
            <Section
              data={this.props.docs}
              loaded={this.props.loaded}
              routing={props}
            />
            <Sections data={this.props.docs} loaded={this.props.loaded} />
          </div>
        }/>

        <Route path='/tools/:year/:month/:day/:title' render={(props) =>
          <div>
            <Calcul/>
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
            <Section
              data={this.props.posts}
              isMission={true}
              loaded={this.props.loaded}
              routing={props}
            />
          </div>
        }/>
      </Switch>
    );
  }
}

export default Main;
