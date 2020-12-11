$("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    width:100,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 900,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
  
      800: {
        items: 3
      },
  
      1024: {
        items: 3
      },
    }
  });
$(document).ready(function(){ 
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) { 
      $('#back-to-top').fadeIn(); 
    } else { 
      $('#back-to-top').fadeOut(); 
    } 
  }); 
  $('#back-to-top').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 
});
