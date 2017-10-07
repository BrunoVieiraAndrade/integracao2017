import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Topico from '../common/topico'

import contextoJson from '../../data/contexto.json'

class Contexto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo: contextoJson.titulo,
      conteudo: contextoJson.conteudo,
      subtopicos: contextoJson.subtopicos,
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

export default Contexto;