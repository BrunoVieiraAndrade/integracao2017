import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HeaderContactInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: ''
    };
    this.onclick = this.onclick.bind(this);
  }

  onclick(index) {
    this.setState({index});
  }

  renderListItem(){
    let numbers = this.props.menu;
    let listItems = numbers.map((item,index) =>
      <li className={this.state.index === index ? "active" : ""} onClick={this.onclick.bind(this, index)} key={index}>
        <Link to={item.url}>
          {item.name}
        </Link>
      </li>
    );
    return listItems;
  }

  render() {
    return (
      <header id="header" className="header-flex" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 220, 'stickyChangeLogo': false}">
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-logo">
                  <Link to="/">
                    <img alt="Presença na Web" width="300" height="55" src="img/custom/logo.png" />
                  </Link>
                </div>
              </div>
              <div className="header-column">
                <div className="header-row">
                  <div className="header-nav header-nav-stripe">
                    <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                      <i className="fa fa-bars" />
                    </button>
                    <div className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          {this.renderListItem()}
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