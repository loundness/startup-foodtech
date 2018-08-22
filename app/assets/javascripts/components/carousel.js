jQuery(document).ready(function ($) {

  var interval;
  interval = setInterval(function () {
    moveRight();
  }, 3000);

  $('._slider').mouseover(function(){
    clearInterval(interval);
  });
  
  $('._slider').mouseleave(function(){
    interval = setInterval(function () {
      moveRight();
      }, 3000);
  });
  
  var slideCount = $('._slider ul li').length;
  var slideWidth = $('._slider ul li').width();
  var slideHeight = $('._slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('._slider').css({ width: slideWidth, height: slideHeight });
  
  $('._slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('._slider ul li:last-child').prependTo('._slider ul');

    function moveLeft() {
        $('._slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('._slider ul li:last-child').prependTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('._slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('._slider ul li:first-child').appendTo('._slider ul');
            $('._slider ul').css('left', '');
        });
    };

    $('._slider_prev').click(function () {
        moveLeft();
        return false;
    });

    $('._slider_next').click(function () {
        moveRight();
        return false;
    });

});   