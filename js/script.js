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

    // $(".sec-trend .hashtag").click(function(){
    //   var indexNum = $(this).index();

    //   $(this).addClass("active")
    //   $(this).siblings().removeClass("active")

    //   $(.sec-trend .content).eq(indexNum).addClass("active")
    //   $(.sec-trend .content).eq(indexNum).siblings().removeClass("active")
    // });

  });
  