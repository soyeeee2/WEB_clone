$(document).ready(function () {
    $(".sec-kg").slick({});
  
    $(".sec-r1").slick({
      dots: true,
      asNavFor: ".sec-r2 > .content-wrap"
    });
  
    $(".sec-r2 > .content-wrap").slick({
      asNavFor: ".sec-r1"
    });
  });
  