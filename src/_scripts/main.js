// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';

import Carousel from '../_modules/molecules/carousel/carousel';
import ImageWidget from '../_modules/molecules/image-widget/image-widget';
import Modal from '../_modules/molecules/modal/modal';

$(() => {
  if($('.carousel').length) {
    new Carousel();
  }

  if($('.image-widget').length) {
    new ImageWidget();
  }

  new Modal();
});

