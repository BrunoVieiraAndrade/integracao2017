import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../home/home";
import VisaoGeral from "../visao_geral/visao_geral";
import Curso from "../curso/curso";
import Disciplina from "../disciplinas/disciplina";
import Disciplinas from "../disciplinas/disciplinas";
import DefaultPageContent from "./default-page-content";
import SearchResults from "../search/search-results";

import {
  VISAO_GERAL_CATEGORIA,
  CURSO_CATEGORIA,
  DISCIPLINAS_CATEGORIA,
} from '../../helpers/global.js'

class Content extends Component {
  render() {
    return (
      <Switch>
        <div role="main" className="main">
          <Route exact path="/" component={ Home }/>
          <Route exact path={"/q=:searchTerm"} component={ SearchResults } />
          <Route exact path={"/" + VISAO_GERAL_CATEGORIA} component={ VisaoGeral } />
          <Route exact path={"/" + CURSO_CATEGORIA} component={ Curso } />
          <Route exact path={"/" + DISCIPLINAS_CATEGORIA} component={ Disciplinas } />
          <Route exact path={"/" + DISCIPLINAS_CATEGORIA + "#*"} component={ Disciplinas } />
          <Route exact path={"/" + DISCIPLINAS_CATEGORIA + "/:disciplinaId"} component={ Disciplina } />
          <Route exact path={"/:categoria/:topicoId"} component={ DefaultPageContent } />
        </div>
      </Switch>
    );
  }
}

export default Content;