import React, { Component } from 'react';

import { renderSubtopicText } from "../../helpers/global";

class Topico extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      topico: this.props.topico
    };
  }

  renderConteudo = (conteudo) => {
    if(conteudo){
      return(
        this.state.topico.conteudo.split('\n').map((item, key) => {
          return <p className="mt-lg">{item}</p>
        })
      );
    }
  };

  renderSubtopicos = (subtopicos) => {
    // Verifica se existe subtopicos
    if (subtopicos) {
      return (
        // Mapeia subtopicos
        subtopicos.map( (subtopico) => {
          switch (subtopico.tipo){
            case 'texto':
              return (
                renderSubtopicText(subtopico.titulo, subtopico.conteudo)
              );
            default:
              <div></div>
          }
        })
      );
    }
  };

  renderTopico = (topico) => {

    if(!topico.tipo){
      return (
        <div>
          <h3 className="mt-xl mb-none pb-none text-uppercase"> { topico.titulo }</h3>
          <div className="divider divider-primary divider-small mb-xl mt-none">
            <hr className="mt-sm" />
          </div>

          {this.renderConteudo( topico.conteudo )}
          {this.renderSubtopicos( topico.subtopicos )}
        </div>
      );
    } else {

      switch (topico.tipo){
        case 'texto':
          renderSubtopicText(topico.titulo, topico.conteudo)
      }
      return (
        <div>
          <h3 className="mt-xl mb-none pb-none text-uppercase"> { topico.titulo }</h3>
          <div className="divider divider-primary divider-small mb-xl mt-none">
            <hr className="mt-sm" />
          </div>

          {this.renderConteudo( topico.conteudo )}
          {this.renderSubtopicos( topico.subtopicos )}
        </div>

      );

    }

  };

  render() {
    if(!this.state.topico){
      return (<div></div>);
    }

    return (
      <div>
        {this.renderTopico(this.state.topico)}
      </div>
    );
  }
}

export default (Topico);
