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
          <Route path={"/" + CURSO_CATEGORIA} component={ Curso } />
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + IDENTIFICACAO_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={IDENTIFICACAO_TOPICO}/>}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + CONTEXTO_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={CONTEXTO_TOPICO} />}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + EXPOSICAO_DE_MOTIVOS_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={EXPOSICAO_DE_MOTIVOS_TOPICO}/>}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + OBJETIVOS_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={OBJETIVOS_TOPICO} />}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO}/>}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO}/>}/>
          <Route path={"/" + VISAO_GERAL_CATEGORIA + "/" + PRINCIPIOS_NORTEADORES} render={()=><DefaultPageContent categoria={VISAO_GERAL_CATEGORIA} topicoId={PRINCIPIOS_NORTEADORES}/>}/>
        </div>
      </Switch>
    );
  }
}

export default Content;