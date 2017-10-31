import React, { Component } from 'react';
import './home.css';

import homeSlider1 from '../../assets/images/slides/home-slider-1.jpg';

class HomeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className="slider-container rev_slider_wrapper" style={{ height: 530 }}>
        <img src="img/slides/home-banner.jpg" />
      </div>
    );
  }
}

export default HomeSlider;