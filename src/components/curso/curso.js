import React, { Component } from 'react';

import PageHeader from '../common/page-header';
import DefaultPageSection from "../common/default-page-section";

import CursoJson from '../../data/ocurso.json';

class Curso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicos: CursoJson,
    };
  }

  render(){
    return (
      <div>
        <PageHeader titulo="O Curso" />
        <DefaultPageSection topicos={this.state.topicos} />
      </div>

    );
  }
}

export default Curso;