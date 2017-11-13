import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'
import HomeSlider from "./home-slider";


class HomeContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topico: apresentacaoJson,
    };
  }

  render(){

    return (
      <section className="section section-no-background section-no-border m-none">
        <div className="container">
          <div className="row mb-xl">
            <div className="col-md-8">

              <Topico topico={this.state.topico} />

            </div>
            
            <div className="col-md-4">
              <a target="_blank" href="http://www.inf.ufg.br/sites/default/files/uploads/es/ppcESPrograd.pdf" className="mt-4 mb-4 appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="0" title="">
                <img alt="" className="img-fluid mt-2 mt-lg-4 mb-4" src="img/custom/baixar-projeto-pedagogico-de-engenharia-de-software.jpg" style={{ marginLeft: 20, width: 320, height: 410 }} />
              </a>
              <div className="micro-map box-shadow-custom clearfix">
                <div className="micro-map-map">
                  <div id="googleMapsMicro" className="google-map m-none homeMaps" />
                </div>
                <div className="micro-map-info">
                  <div className="micro-map-info-detail">
                    <i className="icon-location-pin icons text-color-primary" />
                    <label>ENDEREÇO</label>
                    <strong>Alameda Palmeiras s/n - C. Samambaia, Goiânia - GO</strong>
                    <a href="#" title="">(View Location)</a>
                  </div>
                  <div className="micro-map-info-detail">
                    <i className="icon-phone icons text-color-primary" />
                    <label>TELEFONE</label>
                    <strong>(62) 3521-1181</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default HomeContentSection;


