import React, { Component } from 'react';
import './home.css';

import Topico from '../common/topico'
import apresentacaoJson from '../../data/apresentacao.json'
import HomeSlider from "./home-slider";

import { cheerio } from 'cheerio';
const $ = cheerio.load('https://www.sinonimos.com.br/sucesso/');

class HomeContentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topico: apresentacaoJson,
    };

    $('.container').each( (index, element) =>{
      console.log(element);
    });
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
              <div className="micro-map box-shadow-custom clearfix">
                <div className="micro-map-map">
                  <div id="googleMapsMicro" className="google-map m-none homeMaps" />
                </div>
                <div className="micro-map-info">
                  <div className="micro-map-info-detail">
                    <i className="icon-location-pin icons text-color-primary" />
                    <label>ENDEREÇO</label>
                    <strong>Alameda Palmeiras s/n - C. Samambaia, Goiânia - GO</strong>
                    <a href="demo-hotel-location.html" title="">(View Location)</a>
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


