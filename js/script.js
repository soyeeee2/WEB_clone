$(document).ready(function(){
  $(".main-slider").slick({
    fade: true,
    autoplay: true,
  });

  $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".main-slider-wrap .dots").eq(nextSlide).addClass("active")
    $(".main-slider-wrap .dots").eq(nextSlide).siblings().removeClass("active")
  });

  $(".pro-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      }
    ],

  });

});