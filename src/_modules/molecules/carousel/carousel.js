'use strict';

import 'slick-carousel';

export default class Carousel {
  constructor() {
    let $carousel = $('.carousel');
    let $carouselWrap = $('.carousel-wrap', $carousel);
    let $carouselItem = $('.carousel-item', $carouselWrap);

    $carouselWrap.slick({
      infinite: true,
      dots: true,
      arrows: true,
      speed: 500,
      pauseOnHover: true,
      mobileFirst: true,
      fade: false,
      adaptiveHeight: true,
      accessibility: false
    });
  }
}
