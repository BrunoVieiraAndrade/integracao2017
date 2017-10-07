import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Apresentacao from "../apresentacao/apresentacao";
import Contexto from "../contexto/contexto";

class Content extends Component {
  render() {
    return (
      <Switch>
        <div className="container">
          <Route exact path="/" component={ Apresentacao }/>
          <Route path="/contexto" component={Contexto} />
        </div>
      </Switch>
    );
  }
}

export default Content;