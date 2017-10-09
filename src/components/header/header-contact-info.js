import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HeaderContactInfo extends Component {

  render() {
    return (
      <div className="header-top-custom">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-share">
            </div>
            <div className="col-sm-3 col-phone">
              <i className="icon-phone icons text-color-primary" />
              <label>TELEFONE</label>
              <strong>(62) 3521-1181</strong>
            </div>
            <div className="col-sm-7 col-address">
              <i className="icon-location-pin icons text-color-primary" />
              <label>ENDEREÇO</label>
              <strong>Alameda Palmeiras, s/n - Câmpus Samambaia, Goiânia - GO, 74690-900</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderContactInfo;
