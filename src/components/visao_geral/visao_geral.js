import React, { Component } from 'react';

import PageHeader from '../common/page-header';
import DefaultPageSection from "../common/default-page-section";

import VisaoGeralJson from '../../data/VisaoGeral.json';

import './visao-geral.css';

class VisaoGeral extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicos: VisaoGeralJson,
    };
  }

  render(){
    return (
      <div>
        <PageHeader titulo="Visão Geral" />
        <DefaultPageSection topicos={this.state.topicos} categoria='visao-geral' />
      </div>

    );
  }
}

export default VisaoGeral;