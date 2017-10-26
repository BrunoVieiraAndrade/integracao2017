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
        <div id="revolutionSlider" className="slider rev_slider manual">
          <ul>
            <li data-transition="boxfade">
              <img src={homeSlider1}
                   alt=""
                   data-bgposition="center bottom"
                   data-bgfit="cover"
                   data-bgrepeat="no-repeat"
                   data-bgparallax="10"
                   className="rev-slidebg"
                   data-no-retina />
            </li>
            <li data-transition="boxfade">

              <img src="img/slides/home-slider-2.jpg"
                   alt=""
                   data-bgposition="center bottom"
                   data-bgfit="cover"
                   data-bgrepeat="no-repeat"
                   data-bgparallax="10"
                   className="rev-slidebg"
                   data-no-retina />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeSlider;