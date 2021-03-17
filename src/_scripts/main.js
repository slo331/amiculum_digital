// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';
import Carousel from '../_modules/molecules/carousel/carousel';

$(() => {
  if($('.carousel').length) {
    new Carousel();
  }
});

