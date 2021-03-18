'use strict';

export default class ImageWidget {
  constructor() {
    let $imgWidget = $('.image-widget');
    this.$modal = $('.modal');

    $imgWidget.map((i, el) => {
      let $el = $(el);
      let $imgBtn = $('.btn--plus', $el);
      let $caption = $('.image-caption', $el);
      let $title = $('.title', $caption);
      let $desc = $('.desc', $caption);

      $imgBtn.on('click', e => {
        e.preventDefault();
        this._showModal($title, $desc);
      })
    })
  }

  _showModal($title, $desc) {
		let $init = () => {
      $('body').toggleClass('fixed');
      this.$modal.toggleClass('modal--visible');
      this.$modal.find('.modal-head').empty();
      this.$modal.find('.modal-body').empty();
    };

    $.when($init())
    .done(() => {
      $title.clone().appendTo(this.$modal.find('.modal-head'));
      $desc.clone().appendTo(this.$modal.find('.modal-body'));
    });
	}
}
