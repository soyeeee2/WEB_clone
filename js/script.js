$(document).ready(function(){
  $(".main-slider").slick({
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    autoplay: true,
    asNavFor: $(".sub-slider"),
  });
  $(".sub-slider").slick({
    dots: false,
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    autoplay: true,
    asNavFor: $(".main-slider"),
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
  });
});