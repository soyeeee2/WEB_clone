$(document).ready(function(){
  $(".main-slider").slick({
    fade: true,
    autoplay: true,
  });

  $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".main-slider-wrap .dots").eq(nextSlide).addClass("active")
    $(".main-slider-wrap .dots").eq(nextSlide).siblings().removeClass("active")
  });

  $(".main-slider-wrap .dots").click(function(){
    var indexNum = $(this).index();
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $(".main-slider").slick("slickGoTo",indexNum)
  });

  $(".pro-slider").slick({
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
        }
      }
    ],
  });

  $(".top-menu > ul > li").hover(function(){
    var indexNum = $(this).index();
    $(".sub-menu > .menu-wrap").eq(indexNum).addClass("active")
    $(".sub-menu > .menu-wrap").eq(indexNum).siblings().removeClass("active")
  });
});