import React, { Component } from 'react';

class Topico extends Component {

  constructor(props) {
    super(props);
  }

  renderSubtopicos = (subtopicos) => {
    // Verifica se existe subtopicos
    if (subtopicos) {
      return (
        // Mapeia subtopicos
        subtopicos.map( (subtopico) => {
          return (
            <Topico key={subtopico.titulo} titulo={subtopico.titulo} conteudo={subtopico.conteudo} subtopicos={subtopico.subtopicos} />
          );
        })
      );
    }
  };

  render() {
    return (
      <div>
        <h4>{this.props.titulo}</h4>
        {this.props.conteudo.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/><br/></span>
        })}
        {this.renderSubtopicos(this.props.subtopicos)}
      </div>
    );
  }
}

export default Topico;
