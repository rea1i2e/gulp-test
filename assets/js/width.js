"use strict";

// jsでwiddthを制御
$(function () {
  var width = $('.test__box').outerWidth(true); // test__boxの幅を変数に代入

  var length = $('.js-test__box-wrapper .test__box').length; // test__boxの数を変数に代入

  var boxWrapperWidth = width * length; // 親要素の幅 = test__boxの幅 × 数

  $('.js-test__box-wrapper').css('width', boxWrapperWidth);
  親要素の幅を変更;
});