import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../home/home";
import VisaoGeral from "../visao_geral/visao_geral";

class Content extends Component {
  render() {
    return (
      <Switch>
        <div className="container">
          <Route exact path="/" component={ Home }/>
          <Route path="/visao_geral" component={VisaoGeral} />
        </div>
      </Switch>
    );
  }
}

export default Content;