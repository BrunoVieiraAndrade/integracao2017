import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import PageHeader from '../common/page-header';
import categoriaDeDisciplinasJson from '../../data/disciplinas_restruturada_novo_modelo.json';
import ListaOrdenada from "../common/lista-ordenada";
import ListaNaoOrdenada from "../common/lista-nao-ordenada";

class Disciplina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinaId: this.props.match.params.disciplinaId,
    };

    console.log(this.props.match.params.disciplinaId);
  }

  componentWillMount() {
    this.getDisciplina();
  }

  render() {
    if (!this.state.disciplina) {
      return (
        <div></div>
      );
    }

    return (
      <div>

        <PageHeader titulo={this.state.disciplina.titulo}/>
        <section className="section section-no-background section-no-border m-none p-none">
          <div className="container">
            <div className="row mb-xl">

              <div className="col-md-12">

                <h3 className="mt-xlg pt-xlg mb-none pb-none text-uppercase">{this.state.disciplina.titulo}</h3>
                <div className="divider divider-primary divider-small mb-xl mt-none">
                  <hr className="mt-sm"/>
                </div>

                <div className="row">
                  <div className="col-md-7">

                    <p className="mt-lg lead">{this.state.disciplina.resumo}</p>

                    <div className="room-suite-info">
                      <ul>
                        <li><label>PERÍODO</label> <span>{this.state.disciplina.conteudo.periodo}</span></li>
                        <li><label>NÚCLEO</label> <span>{this.state.disciplina.conteudo.nucleo}</span></li>
                        <li><label>UNIDADE</label> <span>{this.state.disciplina.conteudo.unidade}</span></li>
                        <li><label>CARGA TEÓRICA</label> <span>{this.state.disciplina.conteudo.teo}</span></li>
                        <li><label>CARGA PRÁTICA</label> <span>{this.state.disciplina.conteudo.pra}</span></li>
                        <li><label>CARGA HORÁRIA TOTAL</label> <span>{this.state.disciplina.conteudo.total}</span></li>
                        {this.state.disciplina.conteudo.prerequisito ? <li><label>PRÉREQUISITO</label>
                            <span>{this.renderPreRequisitos(this.state.disciplina.conteudo.prerequisito)}</span></li> : ''}


                        <li><label>OBRIGATÓRIA</label> <span>{this.state.disciplina.conteudo.obrigatoria}</span></li>
                      </ul>
                    </div>

                  </div>
                  <div className="col-md-5">

                    <div
                      className="owl-carousel owl-theme nav-inside box-shadow-custom mt-xl owl-loaded owl-drag owl-carousel-init"
                      data-plugin-options="{'items': 1, 'margin': 10, 'animateOut': 'fadeOut', 'autoplay': true, 'autoplayTimeout': 3000}">


                      <div className="owl-nav disabled">
                        <div className="owl-prev"></div>
                        <div className="owl-next"></div>
                      </div>
                      <div className="owl-dots">
                        <div className="owl-dot"><span></span></div>
                        <div className="owl-dot active"><span></span></div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="col-md-12">

                <h3 className="mt-xlg pt-xlg mb-none pb-none text-uppercase">Ementa</h3>
                <div className="divider divider-primary divider-small mb-xl mt-none">
                  <hr className="mt-sm"/>
                </div>

                <div className="row">
                  <div className="col-md-12">

                    <ListaOrdenada items={this.state.disciplina.conteudo.ementa}/>

                  </div>
                </div>

              </div>

              {this.state.disciplina.conteudo.condicoesMinimas ? this.renderCondicoesMinimas(this.state.disciplina.conteudo.condicoesMinimas) : ''}

              {this.state.disciplina.conteudo.bibliografia.bibliografia_basica ? this.renderBibliografiaBasica(this.state.disciplina.conteudo.bibliografia.bibliografia_basica) : ''}

              {this.state.disciplina.conteudo.bibliografia.bibliografia_complementar ? this.renderBibliografiaComplementar(this.state.disciplina.conteudo.bibliografia.bibliografia_complementar) : ''}

            </div>
          </div>
        </section>
      </div>
    );
  }

  getDisciplina() {
    console.log("Disciplina.id: " + this.state.disciplinaId);

    let disciplinas = [];

    categoriaDeDisciplinasJson.forEach((categoriaDeDisciplina) => {
      disciplinas = disciplinas.concat(categoriaDeDisciplina.subtopicos);
      categoriaDeDisciplina.subtopicos.forEach(disciplina => {
        if (disciplina.id === this.state.disciplinaId) {
          this.setState({disciplina: disciplina});
        }
      })
    });

    // Get all disciplinas as an array
    this.setState({disciplinas: disciplinas});

  }

  renderCondicoesMinimas(items) {
    return (
      <div className="col-md-12">

        <h3 className="mt-xlg pt-xlg mb-none pb-none text-uppercase">Condições mínimas</h3>
        <div className="divider divider-primary divider-small mb-xl mt-none">
          <hr className="mt-sm"/>
        </div>

        <div className="row">
          <div className="col-md-12">


            <ListaNaoOrdenada items={items}/>

          </div>
        </div>

      </div>
    )
  }

  renderBibliografiaBasica(items) {
    return (
      <div className="col-md-12">

        <h3 className="mt-xlg pt-xlg mb-none pb-none text-uppercase">Bibliografia básica</h3>
        <div className="divider divider-primary divider-small mb-xl mt-none">
          <hr className="mt-sm"/>
        </div>

        <div className="row">
          <div className="col-md-12">

            <ListaNaoOrdenada items={items}/>

          </div>
        </div>

      </div>
    )
  }

  renderBibliografiaComplementar(items) {
    return (
      <div className="col-md-12">

        <h3 className="mt-xlg pt-xlg mb-none pb-none text-uppercase">Bibliografia complementar</h3>
        <div className="divider divider-primary divider-small mb-xl mt-none">
          <hr className="mt-sm"/>
        </div>

        <div className="row">
          <div className="col-md-12">

            <ListaNaoOrdenada items={items}/>

          </div>
        </div>

      </div>
    )
  }

  renderPreRequisitos(prerequisitos) {
    let mappedPreRequisitos = prerequisitos.map((prerequisito, index) => {
      console.log('prerequisito ' + prerequisito);

      let disciplina = this.state.disciplinas.filter( (disciplina) => {
        return disciplina.id === prerequisito;
      });

      if (!disciplina || disciplina.length < 1) { return }

      return (
        <Link to={disciplina[0].url}>
          {(index+1) + `. `}{disciplina[0].titulo}

          <br />
        </Link>
      )
    });

    return mappedPreRequisitos;
  }

}

export default Disciplina;