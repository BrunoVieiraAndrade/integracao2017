import React, { Component } from 'react';

import PageHeader from './page-header';
import Topico from './topico';

import visaoGeralJson from '../../data/VisaoGeral.json';
import cursoJson from '../../data/ocurso.json';
import {CURSO_CATEGORIA, VISAO_GERAL_CATEGORIA} from "../../helpers/global";

class DefaultPageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: this.props.match.params.categoria,
      topicoId: this.props.match.params.topicoId,
    };
  }

  componentDidMount(){
    this.getTopico();
  }

  getTopico = () => {
    const {categoria, topicoId} = this.state;
    if (categoria && topicoId){
      switch(categoria){
        case VISAO_GERAL_CATEGORIA:
          this.getTopicoDaVisaoGeral(topicoId);
        case CURSO_CATEGORIA:
          this.getTopicoDoCurso(topicoId);
      }
    }
  };

  getTopicoDaVisaoGeral(topicoId){
    visaoGeralJson.forEach((topico) => {

      if(topico.id){
        if(topico.id === topicoId){
          this.setState({topico: topico});
        }
      }
    });

    return null;
  }

  getTopicoDoCurso(topicoId){
    cursoJson.forEach((topico) => {
      if(topico.id) {
        if (topico.id === topicoId) {
          this.setState({topico: topico});
        }
      }

      return null;
    });
  }

  render(){
    if(!this.state.topico){
      return (
        <div></div>
      );
    }

    return (
      <div>
        <PageHeader titulo={ this.state.topico.titulo } />
        <section className="section section-no-background section-no-border m-none p-none">
          <div className="container">
            <div className="row mb-xl">
              <div className="col-md-12">
                <Topico topico={ this.state.topico ? this.state.topico : null }  />
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default DefaultPageContent;