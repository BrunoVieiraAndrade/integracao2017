import React, { Component } from 'react';
import './home.css';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'
import HomeSlider from "./home-slider";
import HomeContentSection from "./home-content-section";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: apresentacaoJson.titulo,
      conteudo: apresentacaoJson.conteudo,
    };
  }

  render(){

    return (
      <div>
        <HomeSlider/>
        <HomeContentSection/>
      </div>
    );
  }
}

export default Home;