$(document).ready(function () {
  $(".main-slider").slick({
    fade: true,
    autoplay: true,
    arrows: false,
  });

  $('.main-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $(".main-slider-wrap .dots").eq(nextSlide).addClass("active")
    $(".main-slider-wrap .dots").eq(nextSlide).siblings().removeClass("active")
  });

  $(".main-slider-wrap .dots").click(function () {
    var indexNum = $(this).index();
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    $(".main-slider").slick("slickGoTo", indexNum)
  });


  var slidesToShow = 3

  $(".pro-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
      }
    }],
  });


  $('.pro-slider').on('breakpoint', function(event, slick, breakpoint    ){
    console.log(breakpoint=="1024");

    if(breakpoint=="1024"){
      $(".sec-product > .btn-wrap > .dots").append('<div class="dot"><i class="fa-solid fa-circle"></i></div>')
    }
    
  });


  $(".sec-product .btn-left").click(function () {
    $(".pro-slider").slick("slickPrev")
  });
  $(".sec-product .btn-right").click(function () {
    $(".pro-slider").slick("slickNext")
  });
  $(".sec-product .dots > .dot").click(function () {
    var indexNum = $(this).index();


    $(".pro-slider").slick("slickGoTo",indexNum*slidesToShow)
  });



  // 메뉴

  $(".top-menu").mouseover(function () {

    $(".top-menu").addClass("active")

  });
  $(".top-menu").mouseleave(function () {

    $(".top-menu").removeClass("active")

  });

  $(".top-menu > ul > li").mouseover(function () {
    var indexNum = $(this).index();

    $(this).addClass("active")
    $(this).siblings().removeClass("active")

    $(".top-menu").addClass("active")

    $(".sub-menu > .menu-wrap").eq(indexNum).addClass("active")
    $(".sub-menu > .menu-wrap").eq(indexNum).siblings().removeClass("active")

  });

  $(".top-menu > ul > li").mouseleave(function () {

    $(".top-menu").removeClass("active")


    $(".top-menu > ul > li").removeClass("active")
    
  });

  $(".sub-menu> .menu-wrap").mouseover(function () {
   
    var indexNum = $(this).index();

    $(".top-menu").addClass("active")

    $(".top-menu > ul > li").eq(indexNum).addClass("active")
  });

  $(".sub-menu> .menu-wrap").mouseleave(function () {
    $(".top-menu").removeClass("active")
    $(this).removeClass("active")
    
    $(".top-menu > ul > li").removeClass("active")
    console.log(2)
  });

// upbtn
  $(".up-btn").click(function () {
    $("html, body").animate({
      "scrollTop": "0"
    }, 1000)
  });
});


