import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import $ from 'jquery';

class HeaderContactInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: '',
      searchTerm: ''
    };
    this.onclick = this.onclick.bind(this);
  }

  componentDidMount(){
    $(document)
      .on( 'click', '.dropdown-menu', function (e){
        e.stopPropagation();
      });
    $(document)
      .on( 'click', '.form-control', function (e){
        e.stopPropagation();
      });
  }

  onclick(index) {
    this.setState({index});
  }

  renderListItem() {
    let numbers = this.props.menu;
    let listItems = numbers.map((item, index) =>
      <li className={this.state.index === index ? "active" : ""} onClick={this.onclick.bind(this, index)} key={index}>
        <Link to={item.url}>
          {item.name}
        </Link>
      </li>
    );
    return listItems;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/q=` + this.state.searchTerm);
  }

  render() {
    return (
      <header id="header" className="header-flex"
              data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 220, 'stickyChangeLogo': false}">
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-logo">
                  <Link to="/">
                    <img alt="Presença na Web" width="300" height="55" src="img/custom/logo.png"/>
                  </Link>
                </div>
              </div>
              <div className="header-column">
                <div className="header-row">
                  <div className="header-nav header-nav-stripe">
                    <button className="btn header-btn-collapse-nav" data-toggle="collapse"
                            data-target=".header-nav-main">
                      <i className="fa fa-bars"/>
                    </button>
                    <div
                      className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          {this.renderListItem()}


                          <li className="dropdown dropdown-quaternary dropdown-mega" id="headerSearchProperties">
                            <a className="dropdown-toggle" href="#">
                              Busca&nbsp;&nbsp; <i className="fa fa-search"/>
                              <i className="fa fa-caret-down"/></a>
                            <ul className="dropdown-menu custom-fullwidth-dropdown-menu"
                                style={{backgroundColor: '#ba9459'}}>
                              <form id="propertiesFormHeader" action="/q=" method="GET"
                                    noValidate="novalidate" onSubmit={this.onSubmit.bind(this)}>
                                <li>
                                  <div className="dropdown-mega-content">
                                    <div className="p-none">
                                      <div className="row">
                                        <div className="col-md-10">
                                          <div className="form-control-custom">
                                            <input
                                              value={this.state.searchTerm}
                                              onChange={event => this.setState({searchTerm: event.target.value})}
                                              type="text"
                                              className="form-control text-uppercase font-size-sm"
                                              data-msg-required="Este campo é obrigatório."
                                              placeholder="Busca"
                                              name="q"
                                              id="busca"
                                              autoCapitalize="off"
                                              autoComplete="off"
                                              required=""
                                              aria-required="true"/>
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <input type="submit" value="submit"
                                                 className="btn btn-secondary btn-lg btn-block text-uppercase font-size-sm"/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </form>
                            </ul>
                          </li>


                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(HeaderContactInfo);