$(document).ready(function () {
    $(".sec-kg").slick({});
  
    $(".sec-r1").slick({
      dots: true,
      asNavFor: ".sec-r2 > .content-wrap"
    });
  
    $(".sec-r2 > .content-wrap").slick({
      asNavFor: ".sec-r1"
    });

    $(".benefit-slider").slick({
      dots: true,
      prevArrow:'<i class="prev-arrow fa-solid fa-angle-left"></i>',
      nextArrow:'<i class="next-arrow fa-solid fa-angle-right"></i>',
    });

    $(".sec-trend .hashtag").click(function(){
      var indexNum = $(this).index()
      $(this).addClass("active")
      $(this).siblings().removeClass("active")

      $(".sec-trend .img-wrap").eq(indexNum).addClass("active")
      $(".sec-trend .img-wrap").eq(indexNum).siblings().removeClass("active")
    });

    $(".sec-location .slider-location").slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    });


    $(".sec-sns .slider-sns").slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });
    
    // setInterval(function(){
    //   for(var indexNum=0; indexNum<6; indexNum++;){
    //     $(".sec-sns .bar").eq(indexNum).addClass("active")
    //     $(".sec-sns .bar").eq(indexNum).siblings().removeClass("active")
    //   }
    // },2000);

    $(".slider-support").slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow:'<i class="prev-arrow fa-solid fa-angle-left"></i>',
      nextArrow:'<i class="next-arrow fa-solid fa-angle-right"></i>',
    });
  });
  