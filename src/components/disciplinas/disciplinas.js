import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $window from 'jquery';

import PageHeader from '../common/page-header';
import DisciplinaCard from "./disciplina-card";

import DisciplinasJson from '../../data/disciplinas_restruturada_novo_modelo.json';

class Disciplinas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      disciplinas: DisciplinasJson,
      shouldReloadPage: true,
    };

    this.renderDisciplinas(this.state.disciplinas);

    if(!window.location.hash) {
      window.location = window.location + '#*';
      window.location.reload();
    }
  }


  render() {

    return (
      <div>
        <PageHeader titulo="Disciplinas"/>

        <section className="section section-no-background section-no-border m-none p-none">
          <div className="container">
            <div className="row mb-xl">
              <div className="col-md-12">

                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills nav-pills-center sort-source font-size-sm text-uppercase m-xlg"
                        data-sort-id="portfolio" data-option-key="filter"
                        data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}">
                      <li data-option-value="*" className="active"><a href="#">Mostrar Tudo</a></li>
                      {this.renderCategoriasDeDisciplinas(this.state.disciplinas)}
                    </ul>
                  </div>
                </div>

                <div className="row mb-xl">

                  <div className="sort-destination-loader sort-destination-loader-showing">
                    <ul className="portfolio-list sort-destination" data-sort-id="portfolio">
                      {this.renderDisciplinas(this.state.disciplinas)}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    );
  }

  renderCategoriasDeDisciplinas(categoriasDeDisciplinas) {

    if (categoriasDeDisciplinas) {
      return (
        categoriasDeDisciplinas.map( categoriaDeDisciplina => {
          return (
            <li data-option-value={`.` + categoriaDeDisciplina.id} key={categoriaDeDisciplina.id}><a href="#">{categoriaDeDisciplina.titulo}</a></li>
          );
        })
      );
    }

  }

  renderDisciplinas(categoriasDeDisciplinas) {

    var disciplinasCardArray = [];

    categoriasDeDisciplinas.forEach( categoriaDeDisciplinas => {
      var disciplinasCards = categoriaDeDisciplinas.subtopicos.map( disciplina => {
        return(
          <DisciplinaCard categoriaId={categoriaDeDisciplinas.id} disciplina={disciplina} key={disciplina.id} />
        )
      });

      disciplinasCardArray = disciplinasCardArray.concat(disciplinasCards);
    });

    return disciplinasCardArray

  }

}

export default Disciplinas;