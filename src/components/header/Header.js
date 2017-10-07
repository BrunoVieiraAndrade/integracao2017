import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id="header-container">

        <div className="container">

          <div className="card-title"><i className="medium material-icons">fingerprint</i> <h4>Presença na Web</h4></div>
          <nav className="nav-extended">
            <div className="nav-content white">
              <div className="tabs tabs-transparent">
                <li className="tab"><Link to="/" className="grey-text active  no-uppercase">Home</Link></li>
                <li className="tab"><Link to="/contexto" className="grey-text text-lighten-1 no-uppercase" >Contexto</Link></li>
                <li className="tab"><a className="grey-text text-lighten-1 no-uppercase">Grupo 2</a></li>
                <li className="tab"><a className="grey-text text-lighten-1 no-uppercase">Grupo 3</a></li>
                <div className="indicator red" />
              </div>
            </div>
          </nav>

          <nav className="transparent z-depth-0 breadcrumbs-container">
            <div className="nav-wrapper">
              <div id="breadcrumbs" className="col s12">
                <a href="#!" className="breadcrumb">Home</a>
                <a href="#!" className="breadcrumb">Apresentação</a>
              </div>
            </div>
          </nav>

        </div>
      </div>
    );
  }
}

export default Header;
