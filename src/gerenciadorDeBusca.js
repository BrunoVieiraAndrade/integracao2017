import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'
import visaoGeralJson from '../../data/visaoGeral.json'
import oCursoJson from '../../data/ocurso.json'

//Lista de objetos que é carregada com todos os objetos JSON e utilizada para busca.
var ListaDeObjetos = [];


class Busca extends Component {

var resultadoJson = busca();

  constructor(props) {
    super(props);
    this.state = {
      topico: resultadoJson,
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

export default Busca;




//Função que executa pesquisa dentro de toda a estrutura do projeto pedagógico.
function busca(){

	carregaListaDeObjtos();
	
	//Assim que definir um campo de busca na tela deve identificá-lo
	//com o id "campoBusca" e descomentar esse trecho.
	//var campoDeBusca = document.getElementById("campoBusca");
	//var chaveDeBusca = campoBusca.innerText;
	
	var chaveDeBusca = "Ciências Exatas e da Terra";
	
	var listaDeResultados = searchJson(ListaDeObjetos, chaveDeBusca);
	
	return listaDeResultados;
}

function carregaListaDeObjtos(){
	
	//Limpa a lista de objetos
	ListaDeObjetos = [];
	
	for(var j = 0; j < apresentacaoJson.length; j++){
			ListaDeObjetos.push(apresentacaoJson[i]);
	}
	
	for(var j = 0; j < visaoGeralJson.length; j++){
			ListaDeObjetos.push(visaoGeralJson[j]);
	}
	
	for(var k = 0; k < oCursoJson.length; k++){
			ListaDeObjetos.push(oCursoJson[k]);
	}
	
	//Assim que acrescentar os objetos de disciplinas é preciso alimentar a lista
	//com eles aqui também
}

//Função que usa do Fuse JS para pesquisar uma sequência de caracteres dentro da lista de objetos JSON
//passada como parâmetro.
function searchJson(listaDeObjetoJson, chaveDeBusca){

	var options = {
	  shouldSort: true,
	  threshold: 0.6,
	  location: 0,
	  distance: 100,
	  maxPatternLength: 32,
	  minMatchCharLength: 1,
	  keys: [
		"titulo",
		"conteudo",
		"topicos.tipo",
		"topicos.titulo",
		"topicos.conteudo"
	]
	};
		
	var fuse = new Fuse(listaDeObjetoJson, options); 
	var resultado = fuse.search(chaveDeBusca);	
	
	return resultado;
}