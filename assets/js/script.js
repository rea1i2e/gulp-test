"use strict";

// widdthを制御
$(function () {
  var width = $('.test__box').outerWidth(true); // test__boxの幅を変数に代入

  var length = $('.js-test__box-wrapper .test__box').length; // test__boxの数を変数に代入

  var boxWrapperWidth = width * length; // 親要素の幅 = test__boxの幅 × 数

  $('.js-test__box-wrapper').css('width', boxWrapperWidth); //親要素の幅を変更
}); //////////////////////

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('.pagetop');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); //ドロワーメニュー

  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  }); // カルーセルスライダー

  $(function () {
    // スライドの枠を指定
    var width = $('.carousel').outerWidth(true); // スライド1枚の幅を変数に代入

    var length = $('.carousel__list').length; // スライドの数を変数に代入

    var boxWrapperWidth = width * length; // 親要素の幅 = 子要素の幅 × 数

    $('.carousel__area').css('width', boxWrapperWidth); //親要素の幅を変更
    // スライド現在値と最終スライド

    var slideCurrent = 0; // スライド現在値（1枚目のスライド番号としての意味も含む）

    var lastCurrent = $('.carousel__list').length - 1; // スライドの合計数＝最後のスライド番号
    // スライドの動き方+ページネーションに関する関数定義、スライドの切り替わりを「changeslide」として定義

    function changeslide() {
      $('.carousel__area').stop().animate({
        // stopメソッドを入れることでアニメーション1回毎に止める
        left: slideCurrent * -width // 代入されたスライド数 × リスト1枚分の幅を左に動かす

      }); ////////// ページネーションの変数を定義（＝スライド現在値が必要）

      var pagiNation = slideCurrent + 1; // nth-of-typeで指定するため0に＋1をする

      $('.pagination-circle').removeClass('target'); // targetクラスを削除

      $(".pagination-circle:nth-of-type(" + pagiNation + ")").addClass('target'); // 現在のボタンにtargetクラスを追加
    }

    ; // 自動スライド切り替えのタイマー関数定義

    var Timer; ////////// 一定時間毎に処理実行する「startTimer」として関数を定義

    function startTimer() {
      // 変数Timerに下記関数内容を代入する
      Timer = setInterval(function () {
        // setInterval・・・指定した時間ごとに関数を実行
        if (slideCurrent === lastCurrent) {
          // 現在のスライドが最終スライドの場合
          slideCurrent = 0;
          changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
        } else {
          slideCurrent++;
          changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
        }

        ;
      }, 3000); // 上記動作を3秒毎に　← 遅くした
    } ////////// 「startTimer」関数を止める「stopTimer」関数を定義


    function stopTimer() {
      clearInterval(Timer); // clearInterval・・・setIntervalで設定したタイマーを取り消す
    } //////// 自動スライド切り替えタイマーを発動


    startTimer(); //ボタンクリック時関数を呼び出し
    // NEXTボタン

    $('.js-index-btn').click(function () {
      // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の秒間隔がズレる）
      stopTimer();
      startTimer(); // ↓①.tagetを外す記述（黄色丸を消す）

      $('.target').removeClass('target'); // ↓②クリックされたインデックスボタンをslideCurrentに代入

      var clickedIndex = $('.js-index-btn').index($(this)); // ↓③クリックされたボタンにtargetをつける記述（黄色丸をつける）

      $('.js-index-btn').eq(clickedIndex).addClass('target');

      if (slideCurrent === lastCurrent) {
        // 現在のスライドが最終スライドの場合
        slideCurrent = 0;
        changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
      } else {
        slideCurrent++;
        changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
      }

      ;
    });
  }); //////////////////////
});