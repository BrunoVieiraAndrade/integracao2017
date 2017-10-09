import React, { Component } from 'react';
import './home.css';

class HomeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div className="slider-container rev_slider_wrapper homeSlider">
        <div id="revolutionSlider" className="slider rev_slider manual">
          <ul>
            <li data-transition="boxfade">
              <img src="img/demos/hotel/slides/slide-hotel-1.jpg"
                   alt=""
                   data-bgposition="center bottom"
                   data-bgfit="cover"
                   data-bgrepeat="no-repeat"
                   data-bgparallax="10"
                   className="rev-slidebg"
                   data-no-retina />
            </li>
            <li data-transition="boxfade">

              <img src="img/demos/hotel/slides/slide-hotel-2.jpg"
                   alt=""
                   data-bgposition="center bottom"
                   data-bgfit="cover"
                   data-bgrepeat="no-repeat"
                   data-bgparallax="10"
                   className="rev-slidebg"
                   data-no-retina />
            </li>
            <li data-transition="boxfade">

              <img src="img/demos/hotel/slides/slide-hotel-3.jpg"
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