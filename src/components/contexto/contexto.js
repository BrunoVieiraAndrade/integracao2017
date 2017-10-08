import React, { Component } from 'react';

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
      <div>contexto</div>
    );
  }
}

export default Contexto;