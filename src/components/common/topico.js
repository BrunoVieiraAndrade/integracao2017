import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

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

        <Typography type="headline" component="h1">
          {this.props.titulo}
        </Typography>

        {this.props.conteudo.split('\n').map((item, key) => {
          return <Typography component="p">{item}<br/><br/></Typography>
        })}
        {this.renderSubtopicos(this.props.subtopicos)}
      </div>
    );
  }
}

export default Topico;
