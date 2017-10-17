import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DisciplinaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriaId: this.props.categoriaId,
      titulo: this.props.disciplina.titulo,
      nucleo: this.props.disciplina.conteudo.nucleo,
      periodo: this.props.disciplina.conteudo.periodo,
      unidade: this.props.disciplina.conteudo.unidade,
      cargaHorariaTotal: this.props.disciplina.conteudo.total,
      obrigatoria: this.props.disciplina.conteudo.obrigatoria,
      url: this.props.disciplina.url,
    };
  }

  render() {

    return (
      <li className={`col-md-4 isotope-item mb-xlg ` + this.state.categoriaId} style={{ position: 'absolute', left: 0, top: 0 }}>
        <Link to={this.state.url ? this.state.url : ''}>
													<span className="thumb-info thumb-info-centered-info thumb-info-no-borders">
														<span className="thumb-info-wrapper">
															<img src={`img/thumbs/` + this.state.categoriaId + `.jpg`} className="img-responsive" alt="" />
															<span className="thumb-info-title">
																<span className="thumb-info-inner">Ver Detalhes</span>
															</span>
														</span>
													</span>
        </Link>
        <h5 className="mt-md mb-none">{this.state.titulo}</h5>
        <div className="room-suite-info">
          <ul>
            <li><label>NÚCLEO</label>	<span>{this.state.nucleo}</span></li>
            <li><label>PERÍODO</label> <span>{this.state.periodo}</span></li>
            <li><label>UNIDADE</label>	<span>{this.state.unidade}</span></li>
            <li><label>CARGA HORÁRIA TOTAL</label>	<span>{this.state.cargaHorariaTotal}</span></li>
            <li><label>OBRIGATÓRIA?</label><span>{this.state.obrigatoria}</span></li>
            <li>
              <Link to={this.state.url} className="room-suite-info-book" title="">Ver detalhes</Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default DisciplinaCard;