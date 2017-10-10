import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'

class Apresentacao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topico: apresentacaoJson,
    };
  }

  render() {
    return (
      <Col m={6} s={12}>
        <Card>
          <Topico topico={ this.state.topico ? this.state.topico : null }  />
        </Card>
      </Col>
    );
  }
}

export default Apresentacao;
