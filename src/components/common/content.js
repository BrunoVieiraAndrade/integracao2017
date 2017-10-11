import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../home/home";
import VisaoGeral from "../visao_geral/visao_geral";
import Curso from "../curso/curso";
import DefaultPageContent from "./default-page-content";

import {
  VISAO_GERAL_CATEGORIA,
  CURSO_CATEGORIA,
  IDENTIFICACAO_TOPICO,
  CONTEXTO_TOPICO,
  EXPOSICAO_DE_MOTIVOS_TOPICO,
  OBJETIVOS_TOPICO,
  EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO,
  PRINCIPIOS_NORTEADORES
} from '../../helpers/global.js'

class Content extends Component {
  render() {
    return (
      <Switch>
        <div role="main" className="main">
          <Route exact path="/" component={ Home }/>
          <Route exact path={"/" + VISAO_GERAL_CATEGORIA} component={ VisaoGeral } />
          <Route exact path={"/" + CURSO_CATEGORIA} component={ Curso } />
          <Route path={"/:categoria/:topicoId"} component={ DefaultPageContent } />
        </div>
      </Switch>
    );
  }
}

export default Content;