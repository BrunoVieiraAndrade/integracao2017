import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import './header.css';

import HeaderNav from './header-nav';

class Header extends Component {

  render() {
    return (
      <div>
          <HeaderNav menu={[{ name:'Home', url: '/', index: 'home' }, { name:'Visão Geral', url: '/visao-geral' }, { name:'O Curso', url: '/curso' }, { name:'Disciplinas', url: '/disciplinas' }]} />
      </div>
    );
  }
}

export default withRouter(Header);
