$(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 25,
      nav : false,
      navText: false,
      slideBy: 0, //Arrow click 3 image slide
      responsiveClass: true,
      responsive:{
      0:{
      items:1,
      nav:true
      },
      600:{
      items:2,
      nav:true
      },
      1000:{
      items:3,
      nav:true
      }
      }
      });			  
  })