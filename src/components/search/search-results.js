import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import PageHeader from '../common/page-header';
import DefaultPageSection from "../common/default-page-section";
import ThumbCard from '../common/thumbcard';

import Fuse from 'fuse.js';

import cursoJson from '../../data/ocurso.json';
import visaoGeralJson from '../../data/VisaoGeral.json';
import sinonimosJson from '../../data/cacheBusca.json';

import {
  VISAO_GERAL_CATEGORIA,
  CURSO_CATEGORIA,
  DISCIPLINAS_CATEGORIA,
} from '../../helpers/global.js'

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: this.props.match.params.searchTerm,
      searchInputTerm: this.props.match.params.searchTerm,
      results: [],
    };

    console.log(this.state);
  }

  componentDidMount(){
    this.executeQuery();
  }

  executeQuery() {
    if (this.state.searchInputTerm === undefined || this.state.searchInputTerm === '') { return (<div className="col-md-12"><h1>Nenhum resultado encontrado.</h1></div>)}

    console.log('searchinput: ' + this.state.searchInputTerm);

    console.log("executing query");
    let options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "titulo",
        "conteudo",
        "subtopicos.titulo",
        "subtopicos.conteudo",
        "subtopicos.conteudo.nome",
        "subtopicos.conteudo.ementa",
      ]
    };

    let mappedCursoJson = cursoJson.map( (item) => {
      item.categoria = CURSO_CATEGORIA;
      return item;
    });

    let mappedVisaoGeralJson = visaoGeralJson.map( (item) => {
      item.categoria = VISAO_GERAL_CATEGORIA;
      return item;
    });

    let list = mappedCursoJson.concat(mappedVisaoGeralJson);

    let fuse = new Fuse(list, options); // "list" is the item array
    let result = fuse.search(this.state.searchInputTerm);

    // Select all words from the search
    let words = this.state.searchInputTerm.split(" ");
    let synonyms = [];
    // Get synonyms from each word
    words.forEach( (word) => {
      if (word.length > 3){
        if (sinonimosJson[word]){
          synonyms = synonyms.concat(sinonimosJson[word].sinonimos);
        }
      }
    });

    // Do the search for each synonym
    synonyms.forEach( (synonym) => {
      result = result.concat(fuse.search(synonym));
    });

    // Remove duplicates from result
    let cleanResult = Array.from(new Set(result));

    this.setState({results: cleanResult});

  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/q=` + this.state.searchInputTerm);
  }

  renderResults(){
    let result = this.state.results;

    if (result.length === 0){ return <div className="col-md-12"><h1>Não foi possível encontrar um resultado.</h1></div>}

    console.log('result ' + result);
    return (
      result.map((item) => {
        return (
          <div className="col-md-12">
            <ThumbCard topico={item} imageName={item.categoria}/>
          </div>
        );
      })
    )
  }

  render() {
    return (
      <div>
        <PageHeader titulo="Resultados da busca"/>
        <form id="bookForm" action="/'q="
              method="GET"
              noValidate="novalidate" onSubmit={this.onSubmit.bind(this)}>
          <div className="row mt-xl">
            <div className="col-md-12">
              <section className="section section-tertiary section-no-border p-xlg mt-xs mb-xlg" data-plugin-sticky
                       data-plugin-options="{'minWidth': 991, 'containerSelector': '.container', 'padding': {'top': 150}}">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="mt-xl mb-lg pb-none text-uppercase">Busca</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <div className="col-md-10">
                      <div className="form-control-custom">
                        <input
                          type="text"
                          value={this.state.searchInputTerm}
                          onChange={event => this.setState({searchInputTerm: event.target.value})}
                          className="form-control font-size-sm"
                          data-msg-required="This field is required."
                          placeholder="Buscar"
                          name="q"
                          id="bookNowArrival"
                          required/>
                      </div>
                    </div>
                    <div className="col-md-2"><input type="submit" value="enviar"
                                                     className="btn btn-secondary btn-lg btn-block text-uppercase font-size-sm"/>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </form>
        {this.renderResults()}
      </div>

    );
  }
}

export default withRouter(SearchResults);