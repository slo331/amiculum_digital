// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';

import 'slick-carousel';
import enquire from 'enquire.js';

import Carousel from '../_modules/molecules/carousel/carousel';
import ImageWidget from '../_modules/molecules/image-widget/image-widget';
import Modal from '../_modules/molecules/modal/modal';

$(() => {
  let config = {
		breakpoints: {
			tablet: 768,
			desktop: 1024,
			lgDesktop: 1280
		}
  };

  if($('.carousel').length) {
    new Carousel();
  }

  if($('.image-widget').length) {
    new ImageWidget();
  }

  new Modal();

  if($('.topics-wrap').length) {
    // Mobile & Tablet
    enquire.register("screen and (max-width: " + (config.breakpoints.desktop - 1) + "px)", {
      match: () => {
        $('.topics-list').slick({
          infinite: true,
          dots: true,
          arrows: false,
          speed: 500,
          pauseOnHover: true,
          mobileFirst: true,
          fade: false,
          adaptiveHeight: true,
          accessibility: false,
          centerMode: true,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
        });
      },
      unmatch: () => {
        $('.topics-list').slick('unslick');
      }
    });

    
  }
});

