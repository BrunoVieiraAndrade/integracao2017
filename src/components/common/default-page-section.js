import React, { Component } from 'react';

import ThumbCard from './thumbcard';
import '../visao_geral/visao-geral.css';

class DefaultPageSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicos: this.props.topicos
    };
  }

  renderTopicos = (topicos) => {

    if(topicos){
      return (
        topicos.map( (topico) => {
          return (
            <ThumbCard topico={topico} key={topico.titulo} />
          );
        })
      );
    }
  };

  render(){
    return (
      <section className="section section-no-background section-no-border m-none">
        <div className="container">
          {this.renderTopicos(this.state.topicos)}
        </div>
      </section>
    );
  }
}

export default DefaultPageSection;