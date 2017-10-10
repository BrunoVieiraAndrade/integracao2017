import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return (
      <section className="page-header section section-primary section-no-border section-center page-header-custom-background m-none">
        <div className="container">
          <div className="row">
            <div className="col-md-12 center">
              <h1 className="font-weight-bold text-light text-uppercase">{this.props.titulo}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageHeader;