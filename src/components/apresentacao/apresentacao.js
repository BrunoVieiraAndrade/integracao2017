import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'

class Apresentacao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo: apresentacaoJson.titulo,
      conteudo: apresentacaoJson.conteudo,
      subtopicos: apresentacaoJson.subtopicos,
    };
  }

  render() {
    return (
      <Col m={6} s={12}>
        <Card>
          <Topico titulo={this.state.titulo} conteudo={this.state.conteudo} subtopicos={this.state.subtopicos} />
        </Card>
      </Col>
    );
  }
}

export default Apresentacao;
