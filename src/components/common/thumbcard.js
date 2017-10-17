import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

import './thumbcard';

class ThumbCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topico: this.props.topico,
      titulo: this.props.topico.titulo,
      resumo: this.props.topico.resumo,
      url: this.props.topico.url,
      imageName: this.props.imageName,
    };
  }

  componentWillUnmount() {
    window.topico = this.state.topico;
  }

  mouseEnter(topico) {
    console.log(topico.titulo);
    window.topico = topico;
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-12">
								<span className="thumb-info thumb-info-side-image thumb-info-side-image-custom thumb-info-no-zoom box-shadow-custom">
									<span className="thumb-info-side-image-wrapper">
										<img alt="" className="img-responsive img-visao-geral" src={`img/thumbs/` + this.state.imageName + `.jpg`} />
									</span>
									<span className="thumb-info-caption">
										<span className="thumb-info-caption-text">
											<h4 className="text-uppercase mb-xs">{this.state.titulo}</h4>
											<p>{this.state.resumo}</p>
											<p className="align-right p-lg pb-none" onMouseEnter={this.mouseEnter.bind(this, this.state.topico)}>
												<Link className="btn btn-primary btn-lg font-size-sm text-uppercase mb-md" key={this.state.url} to={this.state.url ? this.state.url : ''}>LER MAIS</Link>
											</p>
										</span>
									</span>
								</span>
        </div>
      </div>
    );
  }
}

export default withRouter(ThumbCard);
